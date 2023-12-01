import { Link, Heading, Box } from "@chakra-ui/react";
import { BLOG_NAME } from "../lib/constants";

const Header = () => {
  return (
    <Link href="/">
      <Box
        bg={"whitesmoke"}
        paddingX={50}
        paddingY={5}
        marginX={50}
        borderBottomRadius={10}
        borderWidth={1}
        borderTopWidth={0}
        borderColor="grey"
      >
        <Heading as="h2" size="xl">
          {BLOG_NAME}
        </Heading>
      </Box>
    </Link>
  );
};

export default Header;
