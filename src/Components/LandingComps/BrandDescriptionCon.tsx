import { FunctionComponent } from "react";
import BrandDescription from "./BrandDescription";
import ProdDescription from "./ProdDescription";

import transformDTImg from "url:../../../public/images/desktop/image-transform.jpg";
import standOutDTImg from "url:../../../public/images/desktop/image-stand-out.jpg";
import transformMobImg from "url:../../../public/images/mobile/image-transform.jpg";
import standOutMobImg from "url:../../../public/images/mobile/image-stand-out.jpg";

const content = [
  "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
  "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and expand your brand in digital places.",
  "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
  "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
];

const BrandDescriptionCon: FunctionComponent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <BrandDescription
        heading={"Transform your brand"}
        content={content[0]}
        placement={"left"}
      ></BrandDescription>
      <picture className="order-first sm:order-unset">
        <source media="(min-width: 640px)" srcSet={transformDTImg as string} />
        <img
          className=" w-full h-full object-cover"
          src={transformMobImg as string}
          alt=""
        />
      </picture>
      <picture className="">
        <source media="(min-width: 640px)" srcSet={standOutDTImg as string} />
        <img
          className=" w-full h-full object-cover"
          src={standOutMobImg as string}
          alt=""
        />
      </picture>
      <BrandDescription
        heading={"Standout to the right audience"}
        content={content[1]}
        placement={"right"}
      ></BrandDescription>
      <ProdDescription
        heading={"Graphic Design"}
        content={content[2]}
        placement={"left"}
      ></ProdDescription>
      <ProdDescription
        heading={"Photography"}
        content={content[3]}
        placement={"right"}
      ></ProdDescription>
    </div>
  );
};

export default BrandDescriptionCon;
