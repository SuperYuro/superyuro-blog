import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <ReactMarkdown
      components={ChakraUIRenderer()}
      children={content}
      skipHtml
    />
  );
};

export default PostBody;
