---
title: "2023年を生き抜いた開発環境 Linux編"
excerpt: "使ってるツールを晒すだけ"
date: "2023-12-01T23:31:00.000Z"
---

この記事は，[東京高専プロコンゼミ① Advent Calendar 2023](https://adventar.org/calendars/8825)の1日目の記事です．デプロイに手こずって1日目を過ぎていますが大目に見てください．

## 背景とか

どうも，SuperYuroと言います．東京高専のプロコンゼミというところに所属しております．学年は5年，学科は情報系です．

ネタに困ったので，とりあえず書こうと思っていた内容を放出していきます．

まずはLinux編，続いてWindows編が続きます．

## ハードウェア

アキバでジャンクで購入したThinkPad X260と，自作のデスクトップPCです．

X260はCPUがあまり強くないものの，95Whという容量の暴力によりバッテリー持ちがすごく長いので持ち運び用で使っています．

## ディストリビューション

どちらもArch Linuxを使っています．AURヘルパー（paruとか）を使えば，ほしいパッケージをコマンド一発で入れることができ．アップデートもとても楽なので．

DenoとかRustとかのインストールコマンドを暗記するのは苦行ですし，いちいち公式ページに出向くのも億劫なので．

## デスクトップ環境とか

X260はi3wmを使用しています．SwayやHyprlandへの乗り換えは何度か試みましたが，右のSuperとAltの入れ替えが明らかにめんどくさそうで不便だったので諦めました．i3とかだとXmodmapが使えるので便利．

自作機の方ではCinnamonを使っています．i3wmを使ってもいいんですが（というか一時期使ってました），ディスプレイが3枚あると仮想デスクトップの位置で混乱したので大人しく普通のデスクトップ環境を入れました．

## ターミナル

[Kitty](https://sw.kovidgoyal.net/kitty/)を使っています．

Neovimのカラースキームで透過設定をしなくても，ターミナル側で背景透過の設定をするといい感じにスケルトンなターミナルを使えるのが気に入っています．

自分はタブはほとんど使わないのでこれで十分です．

## シェル

Fishを使っています．デフォルトでもいい感じに動いてくれるのが楽で使い始めました．

Aliasを設定しまくったりして自分好みにカスタマイズしています．

デフォルトシェルに設定するとどこかしらでバグるらしいので，.xprofileで環境変数を設定したりKittyの設定でFishを使うようにしています．

今のところPOSIX非準拠であることに起因する問題は発生していません．

## ターミナルマルチプレクサ

tmuxを使っています．以前友人に布教されてZellijを試しましたが，派手すぎて肌に合わなかったのでやめました．screenは使ったことないです．

prefixはC-xに設定しています．なにかの拍子にNanoが起動したときに抜け出せなくなるという欠点はありますが，これ以上に良さげなやつが無かったのでこれを使っています．

補足：tmuxのprefixはC-tが定番ですが，このキー，

- Unix系のシェルで前後の文字を入れ替える
  - 文字が入れ替わるタイプのtypoの修正に便利
- MS IMEでF10と同じ働きをする

と，意外と別分野でも便利なキーなので，これをprefixに設定するのはやめました．

## エディタ

Neovimを使用しています．プラグインなど詳しくは[こちら](https://github.com/SuperYuro/nvim)．

プロコンが終わったのでconfig v4を作ろうと試みましたが，tsserverやSvelteのLSPがうまく動いてくれなくてず，仕方がないのでこの辺だけVSCodeを使っています．カーソル移動が億劫で仕方がない．

## フォント

ちょっと前まではHackやCaskaydiaCove，JetBrainsMonoなどのNerd Fontを乗り換えながら使っていましたが，つい最近後輩におすすめされた[UDEV Gothic](https://github.com/yuru7/udev-gothic)が良かったので今はこれを使っています．

## 言語関連

X（旧 Twitter）のbioの通り，Rust，Python，C#をメインで使用しています．
他にはTypeScriptやDart（というかFlutter）のほか，授業でC/C++やJavaも使います．

### Rust

自分が一番好きな言語です．[公式](https://wiki.archlinux.jp/index.php/Rust)に則り，pacmanでrustupを入れて使っています．

特記事項は特になし．Neovimでは普通にLSPをセットアップして使ってました．

### Python

[rye](https://github.com/mitsuhiko/rye)というツールでPython本体とモジュール両方のバージョンを管理できるのでお勧めです．あとは，ときどき使う場面があるので[pyenv](https://github.com/pyenv/pyenv)も一応入れています．

フォーマッタはblackとisort，リンターはflake8を使用しています．

**pip installは大罪**

### C#

大体Visual Studioで書いてたので最近模索中です．
clang-formatをいい感じにセットアップしたい（確か使えたはず）．

### Dart

Flutterでしか使ってないです．IDEはAndroid Studioを使っていました．

[flutter-tools.nvim](https://github.com/akinsho/flutter-tools.nvim)を使えばNeovimでも書けますが，LSPがよく落ちる（2023年夏当時）のであまり快適ではないです．

### C/C++

授業で使う場合がほとんどです．時々自分で書こうとしますが，ファイル分割がめんどくさい．

基本的にNeovimかCLionで書くことが多いです．VSCodeは入力補完が効かなくなることがよくあるのであまり使いたくない．

一時期Emacsも使っていました．

### TypeScript/Svelte

前まではNode.jsしか使ってなかったのでNeovimで書いていましたが，最近はeslint_dの調子が悪かったりeslintやprettierの設定が億劫だったりDenoとの共存がうまくいかなかったりでVSCodeに逃げてます．

Node.jsのパッケージマネージャはyarnを使っています．タイプしやすいので．

### Java

IntelliJしか勝たん．

授業でしか使ってないのでgradleとかはよくわからないです．

実は一時期Emacsで書いてました．

### その他

VB系は専用IDEを使っています．それ以外は基本的にVSCodeが多いです．

## まとめ

Neovimを早くまともに動かしたい．

次が本番．Windows編．

## 次回予告

次回は1日空いてtrimscash氏，続いて僕のWindows編です．
