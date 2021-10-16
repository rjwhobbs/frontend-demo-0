import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { DesProps } from "./LandingProps";

const BrandDescription: FunctionComponent<DesProps> = (props) => {
  const { heading, content } = props;
  return (
    <div>
      <h2 className="font-serif">{heading}</h2>
      <p>{content}</p>
      <Link to="#" className="uppercase font-serif">
        Learn more
      </Link>
    </div>
  );
};

export default BrandDescription;
