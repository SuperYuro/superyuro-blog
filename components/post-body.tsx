import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import { Heading, Text } from "@chakra-ui/react";

type Props = {
  content: string;
};

const customTheme = {
  p: (props) => {
    const { children } = props;
    return (
      <Text size="sm" my="5">
        {children}
      </Text>
    );
  },
  h1: (props) => {
    const { children } = props;
    return (
      <Heading as="h1" size="2xl" mb="3">
        {children}
      </Heading>
    );
  },
  h2: (props) => {
    const { children } = props;
    return (
      <Heading as="h2" size="xl" mb="3">
        {children}
      </Heading>
    );
  },
  h3: (props) => {
    const { children } = props;
    return (
      <Heading as="h3" size="lg" mb="3">
        {children}
      </Heading>
    );
  },
  h4: (props) => {
    const { children } = props;
    return (
      <Heading as="h4" size="md" mb="3" fontWeight="bold">
        {children}
      </Heading>
    );
  },
  h5: (props) => {
    const { children } = props;
    return (
      <Heading as="h5" size="md" mb="3" fontWeight="semibold">
        {children}
      </Heading>
    );
  },
  h6: (props) => {
    const { children } = props;
    return (
      <Heading as="h6" size="md" mb="3" fontWeight="semibold">
        {children}
      </Heading>
    );
  },
};

const PostBody = ({ content }: Props) => {
  return (
    <ReactMarkdown
      components={ChakraUIRenderer(customTheme)}
      children={content}
      skipHtml
    />
  );
};

export default PostBody;
