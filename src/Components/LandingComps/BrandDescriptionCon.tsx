import { FunctionComponent } from "react";
import BrandDescription from "./BrandDescription";
import ProdDescription from "./ProdDescription";

import transformImg from "url:../../../public/images/desktop/image-transform.jpg";
import standOutImg from "url:../../../public/images/desktop/image-stand-out.jpg";

const content = [
  "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
  "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and expand your brand in digital places.",
  "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
  "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
];

const BrandDescriptionCon: FunctionComponent = () => {
  return (
    <div className="grid grid-cols-2">
      <BrandDescription
        heading={"Transform your brand"}
        content={content[0]}
        margin={"ml"}
      ></BrandDescription>
      <img className="w-full" src={transformImg as string} alt="egg" />
      <img className="w-full" src={standOutImg as string} alt="egg" />
      <BrandDescription
        heading={"Standout to the right audience"}
        content={content[1]}
        margin={"mr"}
      ></BrandDescription>
      <ProdDescription
        heading={"Graphic Design"}
        content={content[2]}
      ></ProdDescription>
      <ProdDescription
        heading={"Photography"}
        content={content[3]}
      ></ProdDescription>
    </div>
  );
};

export default BrandDescriptionCon;
