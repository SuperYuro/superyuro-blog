import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import { SimpleGrid, Heading } from "@chakra-ui/react";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <Heading as="h2">Posts</Heading>

      <SimpleGrid spacing={4} minChildWidth={250}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </SimpleGrid>
    </section>
  );
};

export default MoreStories;
