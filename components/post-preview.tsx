import DateFormatter from "./date-formatter";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  CardFooter,
  Button,
} from "@chakra-ui/react";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <Card>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize="medium">{excerpt}</Text>
        </CardBody>
        <CardFooter
          fontSize="small"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <DateFormatter dateString={date} />
          <Button colorScheme="teal">Read more</Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PostPreview;
