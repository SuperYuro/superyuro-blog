import Footer from "./footer";
import Meta from "./meta";
import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Box>
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
