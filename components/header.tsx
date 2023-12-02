import Link from "next/link";
import { BLOG_NAME } from "../lib/constants";

const Header = () => {
  return (
    <header>
      <div className="flex flex-row p-5 bg-slate-200">
        <div className="flex-grow">
          <Link href="/">
            <h2 className="text-4xl font-semibold">{BLOG_NAME}</h2>
          </Link>
        </div>
        <div className="flex flex-col text-right">
          <Link href="/">
            <div className="hover:underline">All posts</div>
          </Link>
          <div className="hover:underline">About (そのうち書く)</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
