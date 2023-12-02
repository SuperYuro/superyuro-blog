import Link from "next/link";
import { BLOG_NAME } from "../lib/constants";

const Header = () => {
  return (
    <Link href="/">
      <div >
        <h2>
          {BLOG_NAME}
        </h2>
      </div>
    </Link>
  );
};

export default Header;
