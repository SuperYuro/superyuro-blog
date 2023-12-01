import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";
import { Box, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  date: string;
};

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <Box marginBottom={5}>
        <DateFormatter dateString={date} />
      </Box>
    </>
  );
};

export default PostHeader;
