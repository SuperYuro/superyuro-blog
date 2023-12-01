import markdownStyles from "./markdown-styles.module.css";
import { Box } from "@chakra-ui/react";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <Box marginX="auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  );
};

export default PostBody;
