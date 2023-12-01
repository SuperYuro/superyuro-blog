import DateFormatter from "./date-formatter";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const HeroPost = ({ title, date, excerpt, slug }: Props) => {
  return (
    <section>
      <div className="flex flex-col">
        <div>
          <div className="text-lg">
            <DateFormatter dateString={date} />
          </div>
          <h3 className="text-4xl">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
        </div>
        <div>
          <p className="mt-2 text-lg">{excerpt}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
