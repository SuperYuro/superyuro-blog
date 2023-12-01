import { FaTwitter, FaGithub } from "react-icons/fa";
import { Container, Flex, Text, Center, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer>
      <Center
        flexDirection={"column"}
        padding={3}
        marginTop={3}
        backgroundColor={"whitesmoke"}
      >
        <Text>© 2023 SuperYuro. All rights reserved.</Text>

        <Flex direction={"row"} marginTop={1}>
          <Link href="https://twitter.com/YuroYuro0508" marginRight={1}>
            <FaTwitter />
          </Link>
          <Link href="https://github.com/SuperYuro" marginLeft={1}>
            <FaGithub />
          </Link>
        </Flex>
      </Center>
    </footer>
  );
};

export default Footer;
