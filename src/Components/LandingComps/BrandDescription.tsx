import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { DesProps } from "./LandingProps";

const BrandDescription: FunctionComponent<DesProps> = (props) => {
  const { heading, content, placement } = props;
  let marginAlign = "";
  let lineColor = "";

  if (placement && placement == "left") {
    marginAlign = "sm:ml-3";
    lineColor = "#FDF5C4";
  } else if (placement && placement == "right") {
    marginAlign = "sm:mr-3";
    lineColor = "#FBDCD5";
  }

  return (
    <div className="h-81vw sm:h-full flex sm:mt-8 sm:mb-4 lg:mt-0 items-center sm:items-start lg:items-center justify-center">
      <div className={marginAlign + " h-2/3 w-2/3 relative mx-0"}>
        <h2 className="text-center sm:text-left font-serif text-desat-blue text-8vw sm:text-3xl lg:text-4.5xl leading-tight">
          {heading}
        </h2>
        <p className="text-center sm:text-left text-grey-blue lg:text-lg my-3 xl:my-10">
          {content}
        </p>
        <Link
          to="#"
          className="relative z-10 learn-more text-lg hover:text-lg.5 duration-300 uppercase font-serif"
        >
          Learn more
        </Link>
        <div
          className="learn-more-line"
          style={{ backgroundColor: lineColor }}
        ></div>
      </div>
    </div>
  );
};

export default BrandDescription;
