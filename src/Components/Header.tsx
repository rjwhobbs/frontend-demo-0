import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Header: FunctionComponent = () => {
  return (
    <header>
      <nav className="">
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
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
