import { FunctionComponent } from "react";
import { DesProps } from "./LandingProps";

import gDesignDTImg from "url:../../../public/images/desktop/image-graphic-design.jpg";
import photoDTImg from "url:../../../public/images/desktop/image-photography.jpg";
import gDesignMImg from "url:../../../public/images/mobile/image-graphic-design.jpg";
import photoMImg from "url:../../../public/images/mobile/image-photography.jpg";

const ProdDescription: FunctionComponent<DesProps> = (props) => {
  const { heading, content, placement } = props;

  let dtImg: string = gDesignDTImg as string;
  let mImg: string = gDesignMImg as string;
  let textColor = "text-dark-green";

  if (placement && placement == "right") {
    dtImg = photoDTImg as string;
    mImg = photoMImg as string;
    textColor = "text-photo-blue";
  }

  return (
    <div className="relative">
      <div
        className={`absolute inset-y-0 flex flex-col justify-end items-center ${textColor}`}
      >
        <h3 className="font-serif text-8vw sm:text-2xl mb-0 xs:mb-1 sm:mb-2 md:mb-4 xl:mb-8">
          {heading}
        </h3>
        <p className="my-7vw xs:my-8vw sm:mt-0 sm:mb-4 xl:mb-14 px-6 sm:px-2 lg:px-36 text-center text-base xs:text-lg sm:text-sm md:text-base">
          {content}
        </p>
      </div>
      <picture className="">
        <source media="(min-width: 640px)" srcSet={dtImg} />
        <img className="w-full h-full object-cover" src={mImg} alt="" />
      </picture>
    </div>
  );
};

export default ProdDescription;
