import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  const relatedPosts = posts.slice(0, 10);

  return (
    <section>
      <h2 className="mt-4 mb-2 text-4xl font-bold">Related posts</h2>
      <div className="grid grid-cols-1 mb-32">
        {relatedPosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
