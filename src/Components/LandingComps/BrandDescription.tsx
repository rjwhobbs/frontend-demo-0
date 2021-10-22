import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { DesProps } from "./LandingProps";

const BrandDescription: FunctionComponent<DesProps> = (props) => {
  const { heading, content, margin } = props;
  const marginAlign = margin ? margin + "-3" : "";
  return (
    <div className="flex items-center justify-center">
      <div className={marginAlign + " h-2/3 w-2/3 relative"}>
        <h2 className="font-serif text-desat-blue text-4.5xl leading-tight">
          {heading}
        </h2>
        <p className="text-grey-blue text-lg my-10">{content}</p>
        <Link
          to="#"
          className="relative z-10 learn-more text-lg uppercase font-serif"
        >
          Learn more
        </Link>
        <div className="learn-more-line"></div>
      </div>
    </div>
  );
};

export default BrandDescription;
