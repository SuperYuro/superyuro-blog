import { ReactNode } from "react";
import { Heading } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <Heading as="h1" size="xl" marginBottom={5}>
      {children}
    </Heading>
  );
};

export default PostTitle;
