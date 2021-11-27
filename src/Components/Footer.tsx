import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import fbIcon from "url:../../public/icons/icon-facebook.svg";
import instaIcon from "url:../../public/icons/icon-instagram.svg";
import twitIcon from "url:../../public/icons/icon-twitter.svg";
import pinIcon from "url:../../public/icons/icon-pinterest.svg";
import logoGreen from "url:../../public/icons/logo-green.svg";

const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-light-green pt-16 pb-20">
      <ul>
        <li className="">
          <Link to="/">
            <img
              aria-hidden="true"
              className="mx-auto w-40"
              src={logoGreen as string}
              alt="logo"
            />
            <span className="visually-hidden">Home</span>
          </Link>
        </li>
        <ul className="mt-14 flex justify-evenly mx-30p">
          <li className="inline">
            <Link className="text-dark-green" to="#">
              About
            </Link>
          </li>
          <li className="inline">
            <Link className="text-dark-green" to="#">
              Services
            </Link>
          </li>
          <li className="inline">
            <Link className="text-dark-green" to="#">
              Projects
            </Link>
          </li>
        </ul>
      </ul>
      <ul className="pt-16 flex justify-evenly mx-35p">
        <li>
          <Link to="#">
            <img aria-hidden src={fbIcon as string} alt="facebook" />
            <span className="visually-hidden">facebook</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <img aria-hidden src={instaIcon as string} alt="instagram" />
            <span className="visually-hidden">instagram</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <img aria-hidden src={twitIcon as string} alt="twitter" />
            <span className="visually-hidden">twitter</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <img aria-hidden src={pinIcon as string} alt="pinterest" />
            <span className="visually-hidden">pinterest</span>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
