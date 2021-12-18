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
        <ul className="mt-10 flex items-center justify-between">
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
              aria-expanded={isMenuOpen}
              aria-controls="nav-dropdown"
            >
              <span className="visually-hidden">Menu</span>
              {/* <img src={hamburger as string} alt="" /> */}
              <div className="h-5 w-6 border-red border-2 relative">
                <span className="h-1 bg-white absolute left-0 w-full"></span>
              </div>
            </button>
            <ul
              id="nav-dropdown"
              className={`flex flex-col items-center py-8 dropdown z-10 absolute left-10 right-10 bg-white mt-10 sm:mt-5 md:mt-10 ${
                isMenuOpen ? "open" : ""
              }`}
            >
              <li className="mb-4">
                <Link to="#" className="nav-link-mob">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="nav-link-mob">
                  Services
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="nav-link-mob">
                  Projects
                </Link>
              </li>
              <li className="active:bg-dark-yellow hover:bg-dark-yellow bg-sun-yellow flex rounded-full">
                <Link
                  to="#"
                  className="font-serif uppercase text-desat-blue active:text-black hover:text-black text-lg py-4 px-7"
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
            <Link to="#" className="nav-link-dt">
              About
            </Link>
          </li>
          <li className="mr-12">
            <Link to="#" className="nav-link-dt">
              Services
            </Link>
          </li>
          <li className="mr-12">
            <Link to="#" className="nav-link-dt">
              Projects
            </Link>
          </li>
          <li className="bg-white duration-200 text-desat-blue hover:text-white hover:bg-light-blue flex rounded-full">
            <Link to="#" className="font-serif uppercase text-lg py-4 px-7">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <picture>
        <source media="(min-width: 640px)" srcSet={headerDTImg as string} />
        <img src={headerMImg as string} alt="" />
      </picture>
    </header>
  );
};

export default Header;
