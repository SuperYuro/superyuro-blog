import { FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col justify-center content-center p-5 text-center bg-slate-200">
        <div className="mb-2">© 2023 SuperYuro. All rights reserved.</div>

        <div className="flex flex-row justify-center">
          <a className="mr-2" href="https://twitter.com/YuroYuro0508">
            <FaTwitter />
          </a>
          <a className="ml-2" href="https://github.com/SuperYuro">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
