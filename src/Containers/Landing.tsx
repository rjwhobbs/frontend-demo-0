import { FunctionComponent } from "react";
import Header from "../Components/Header";
import BrandDescription from "../Components/BrandDescription";

const content = [
  "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
  "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and expand your brand in digital places.",
];

const Landing: FunctionComponent = () => {
  return (
    <>
      <Header></Header>
      <h1 className="uppercase font-serif">We Are Creatives</h1>
      <BrandDescription
        heading={"Transform your brand"}
        content={content[0]}
      ></BrandDescription>
      <BrandDescription
        heading={"Standout to the right audience"}
        content={content[1]}
      ></BrandDescription>
    </>
  );
};

export default Landing;
