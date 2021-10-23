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
      <div className={marginAlign + " sm:h-2/3 sm:w-2/3 relative mx-0"}>
        <h2 className="mx-8 sm:mx-0 text-center sm:text-left font-serif text-desat-blue text-8vw sm:text-3xl lg:text-4.5xl leading-tight">
          {heading}
        </h2>
        <p className="mx-7 sm:mx-0 text-center sm:text-left text-grey-blue lg:text-lg my-0 xs:my-8vw sm:my-3 md:my-9 xl:my-10">
          {content}
        </p>
        <div className="flex flex-col items-center sm:block">
          <Link
            to="#"
            className="relative z-10 learn-more leading-7 hover:text-lg sm:text-lg sm:hover:text-lg.5 duration-300 uppercase font-serif"
          >
            Learn more
          </Link>
          <div
            className="learn-more-line"
            style={{ backgroundColor: lineColor }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BrandDescription;
