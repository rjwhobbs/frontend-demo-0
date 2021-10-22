import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import headerDTImg from "url:../../public/images/desktop/image-header-dt.jpg";
import headerMImg from "url:../../public/images/mobile/image-header.jpg";
import logoWhite from "url:../../public/icons/logo-white.svg";
import hamburger from "url:../../public/icons/icon-hamburger.svg";

const Header: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="relative">
      <nav className="block lg:hidden absolute top-0 px-10 w-full">
        <ul className="mt-10 flex items center justify-between">
          <li>
            <Link className="" to="/">
              <img
                aria-hidden="true"
                className="w-48"
                src={logoWhite as string}
                alt="logo"
              />
              <span className="visually-hidden">Home</span>
            </Link>
          </li>
          <li>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleMenuOpen();
              }}
              aria-expanded={isMenuOpen ? true : false}
              aria-controls="nav-dropdown"
            >
              <span className="visually-hidden">Menu</span>
              <img src={hamburger as string} alt="" />
            </button>
            <ul
              id="nav-dropdown"
              className={`flex flex-col items-center py-8 dropdown z-10 absolute left-10 right-10 bg-white mt-10 sm:mt-5 md:mt-10 ${
                isMenuOpen ? "open" : ""
              }`}
            >
              <li className="mb-4">
                <Link to="#" className="text-dark-blue text-lg">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="text-dark-blue text-lg">
                  Services
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="text-dark-blue text-lg">
                  Projects
                </Link>
              </li>
              <li className="bg-sun-yellow flex rounded-full">
                <Link
                  to="#"
                  className="font-serif uppercase text-desat-blue text-lg py-4 px-7"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <nav className="hidden lg:block absolute top-0 px-10 w-full">
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
            <Link
              to="#"
              className="font-serif uppercase text-desat-blue text-lg py-4 px-7"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <img
        className=""
        srcSet={`${headerMImg as string} 750w, ${headerDTImg as string} 2880w`}
        sizes="(max-width: 640px) 750px, 2880px"
        src={headerDTImg as string}
        alt="sliced orange"
      />
    </header>
  );
};

export default Header;
