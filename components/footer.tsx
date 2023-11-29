import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="border-t bg-neutral-50 border-neutral-200">
      <Container>
        <div className="p-5 m-5">
          <div className="text-center">
            © 2023 SuperYuro. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
