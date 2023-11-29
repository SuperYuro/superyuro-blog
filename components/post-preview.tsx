import DateFormatter from "./date-formatter";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
