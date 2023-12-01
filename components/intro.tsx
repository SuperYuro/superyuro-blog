import { BLOG_NAME } from "../lib/constants";
import { Heading } from "@chakra-ui/react";

const Intro = () => {
  return (
    <section>
      <Heading as="h2" size="2xl" marginBottom={5}>
        {BLOG_NAME}
      </Heading>
    </section>
  );
};

export default Intro;
