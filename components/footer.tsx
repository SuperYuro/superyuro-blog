import { ReactNode } from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";

type IconLinkProps = {
  href: string;
  children: ReactNode;
};

const IconLink = ({ href, children }: IconLinkProps) => {
  return (
    <a className="flex flex-row items-center justify-center m-2" href={href}>
      {children}
    </a>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center w-full text-center bg-slate-100">
        <div className="mt-5">@ 2023 SuperYuro. All rights reserved.</div>
        <div className="flex flex-row items-end mb-5">
          <IconLink href="https://twitter.com/YuroYuro0508">
            <FaTwitter />
          </IconLink>
          <IconLink href="https://github.com/SuperYuro">
            <FaGithub />
          </IconLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
