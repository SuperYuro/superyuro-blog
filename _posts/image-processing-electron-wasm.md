---
title: "ElectronとWasmで画像処理で遊ぶ"
excerpt: "Rustで書いた画像処理をElectronで動かそう"
date: "2023-12-19T16:52:00.000Z"
---

この記事は，[全国高専_非公式 Advent Calendar 2023](https://adventar.org/calendars/8777)の19日目の記事です．間に合っていることを祈ります．

## 背景とか

東京高専のSuperYuroです．

Rustで書いた画像処理をデスクトップアプリで動かしたいというシチュエーションに遭遇したので，最近興味を持っているWebAssemblyでチャレンジしてみました．

## Electron側の準備

### プロジェクトを作成する

今回はパッケージマネージャとしてyarnを使用します．`npm i -g yarn`でインストールできます．

Electronプロジェクトを作成する方法はいくつかありますが，今回は以下のコマンドで作成します．Webフレームワーク(?)にはSvelteを使用します．

作成時にいくつか質問されますが，今回は以下のように回答しました．

```sh
$ yarn create @quick-start/electron
√ Project name: ... advent-2023-electron
√ Select a framework: » svelte
√ Add TypeScript? ... Yes
√ Add Electron updater plugin? ... No
√ Enable Electron download mirror proxy? ... No
```

### とりあえず既存のスタイルを消す

ここから先，相対パスの起点はプロジェクトルートとします．

`./src/renderer/src/main.ts`の1行目（`import './assets/style.css'`）を削除します．

続いて，`./src/renderer/src/assets`ディレクトリと`./src/renderer/src/components/Versions.svelte`を削除します．`components`ディレクトリは後で使うので残しておきます．

最後に，`./src/renderer/src/App.svelte`の内容を以下のように書き換えれば完了です．

```svelte
<div>
  <h1>Hello, world!</h1>
</div>
```

### 画像を開けるようにする

#### CSPの設定を変える

続いて，「ファイルを開く」ダイアログで画像を開いて表示できるようにします．

まず，`./src/render/index.html`の`Content-Security-Policy`を設定している`meta`タグを以下のように変更します．多分7行目にあります．

```html
<meta http-equiv="Content-Security-Policy"
 content="img-src 'self' data:"
  />
```

#### 画像のファイルパスを格納する部分を作る

今回は，無駄にSvelteの状態管理モジュールのstoreを使用して画像のパスを保持します．

```TypeScript
import { writable } from 'svelte/store'

export const imageFilePath = writable('')
```

#### 画像を開くボタンを作る

画像を開くボタンを作ります．

`./src/renderer/src/components/OpenFileButton.svelte`に，以下の内容を書きます．

```Svelte
<script lang="ts">
  import { imageFilePath } from '../stores'

  let fileInputElement: HTMLInputElement

  // 「ファイルを開く」ダイアログを表示
  const openImageFile = (): void => {
    fileInputElement.click()
  }

  // 選択されたファイルをimageFilePathに格納する
  const handleFileChange = (event: Event): void => {
    const input = event.target as HTMLInputElement
    if (input.files && input.files[0]) {
      const reader = new FileReader()
      reader.onload = (event: ProgressEvent<FileReader>): void => {
        $imageFilePath = event.target.result.toString()
      }
      reader.readAsDataURL(input.files[0])
    }
  }
</script>

<input
  type="file"
  id="fileInput"
  accept="image/*"
  on:change={handleFileChange}
  hidden
  bind:this={fileInputElement}
/>
<button on:click={openImageFile}>開く</button>

<style>
  button {
    margin: 8px 0;
    padding: 10px;
  }
</style>
```

#### ボタンを置くサイドバーを作る

ボタンを置く右側のサイドバーを作ります．

`./src/renderer/src/components/RightBar.svelte`に以下の内容を書きます．

```Svelte
<script>
  import OpenFileButton from './OpenFileButton.svelte'
</script>

<div class="sidebar">
  <OpenFileButton />
</div>

<style>
  .sidebar {
    width: 200px;
    min-width: 200px;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    padding-left: 4px;
  }
</style>
```

#### 画像の表示部分を作る

画像を表示する部分を作ります．

`./src/renderer/src/components/Image.svelte`に以下の内容を書きます．

```Svelte
<script lang="ts">
  import { imageFilePath } from '../stores'
</script>

<div class="image-container">
  <img src={$imageFilePath} alt={$imageFilePath} />
</div>

<style>
  .image-container {
    flex-grow: 1;
  }
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
```

#### 全部を合わせる

`./src/renderer/src/App.svelte`を以下のように書き換えます．

```Svelte
<script>
  import Image from './components/Image.svelte'
  import RightBar from './components/RightBar.svelte'
</script>

<div class="container">
  <Image />
  <RightBar />
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    padding: 4px;
  }
</style>
```

全部やると，「開く」ボタンで画像を選択して以下のように画像を開くことができると思います．

![完成図]("../public/assets/blog/image-processing-electron-wasm/prepare-electron.png")
