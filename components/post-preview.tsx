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
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div className="flex flex-col p-3 m-5 bg-white border-y-2">
        <div className="flex-row pr-5 pl-3 w-96">
          <h2 className="text-xl hover:underline">{title}</h2>
          <div>
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div className="my-2" />
        <div>{excerpt}</div>
      </div>
    </Link>
  );
};

export default PostPreview;
