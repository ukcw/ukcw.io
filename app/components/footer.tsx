import { Link } from "@remix-run/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className="mt-20 px-10 pt-48 pb-16 border-t border-gray-200">
      <div className="relative mx-10vw">
        <div className="relative mx-auto max-w-3xl lg:max-w-7xl">
          <div className="font-medium text-2xl">
            Ulysses Kee
          </div>
          <p className="max-w-md mt-6 text-2xl dark:text-gray-400">
            Software engineer interested in making the world a better place
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="https://github.com/ukcw"><FaGithub className="h-6 w-6" /></a>
            <a href="https://twitter.com/ukcw_"><FaTwitter className="h-6 w-6" /></a>
            <a href="https://www.linkedin.com/in/ulysses-kee/"><FaLinkedin className="h-6 w-6" /></a>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer;
