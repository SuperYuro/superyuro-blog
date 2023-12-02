import { FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div
      >
        <p>© 2023 SuperYuro. All rights reserved.</p>

        <div classname="flex flex-row">
          <a href="https://twitter.com/YuroYuro0508" marginRight={1}>
            <FaTwitter />
          </a>
          <a href="https://github.com/SuperYuro">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
