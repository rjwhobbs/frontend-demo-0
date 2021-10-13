import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import fbIcon from "url:../../public/icons/icon-facebook.svg";
import instaIcon from "url:../../public/icons/icon-instagram.svg";
import twitIcon from "url:../../public/icons/icon-twitter.svg";
import pinIcon from "url:../../public/icons/icon-pinterest.svg";

const Footer: FunctionComponent = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">
            <span aria-hidden="true">sunnyside</span>
            <span className="visually-hidden">Home</span>
          </Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Services</Link>
        </li>
        <li>
          <Link to="#">Projects</Link>
        </li>
      </ul>
      <ul>
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
