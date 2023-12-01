import { Container as ChakraContainer, Box } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <Box
      bg={"whitesmoke"}
      paddingX={50}
      paddingY={50}
      marginX={50}
      borderRadius={10}
      borderWidth={1}
      borderColor="grey"
    >
      {children}
    </Box>
  );
};

export default Container;
