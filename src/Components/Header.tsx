import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import headerImg from "url:../../public/images/image-header.jpg";
import logoWhite from "url:../../public/icons/logo-white.svg";

const Header: FunctionComponent = () => {
  return (
    <header className="relative">
      <nav className="absolute top-0 px-10 w-full">
        <ul className="mt-10 flex justify-end items-center">
          <li className="mr-auto">
            <Link to="/">
              <img
                aria-hidden="true"
                className="w-48"
                src={logoWhite as string}
                alt="logo"
              />
              <span className="visually-hidden">Home</span>
            </Link>
          </li>
          <li className="mr-12">
            <Link to="#" className="text-white text-lg">
              About
            </Link>
          </li>
          <li className="mr-12">
            <Link to="#" className="text-white text-lg">
              Services
            </Link>
          </li>
          <li className="mr-12">
            <Link to="#" className="text-white text-lg">
              Projects
            </Link>
          </li>
          <li className="bg-white flex rounded-full">
            <Link to="#" className="font-serif uppercase text-lg py-4 px-7">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <img className="" src={headerImg as string} alt="sliced orange" />
    </header>
  );
};

export default Header;
