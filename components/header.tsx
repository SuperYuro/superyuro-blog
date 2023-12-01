import { Link, Heading } from "@chakra-ui/react";
import { BLOG_NAME } from "../lib/constants";

const Header = () => {
  return (
    <Link href="/">
      <Heading as="h2" size="2xl" marginBottom={5}>
        {BLOG_NAME}
      </Heading>
    </Link>
  );
};

export default Header;
