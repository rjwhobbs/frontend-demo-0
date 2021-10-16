import { FunctionComponent } from "react";
import arrowDown from "url:../../../public/icons/icon-arrow-down.svg";

const MainHeading: FunctionComponent = () => {
  return (
    <div className="absolute top-40 xl:top-48 w-full">
      <h1 className="uppercase font-serif text-center tracking-widest text-white text-4xl xl:text-5xl">
        We Are Creatives
      </h1>
      <img
        className="mx-auto w-7 xl:w-9 mt-16 xl:mt-20"
        src={arrowDown as string}
        alt=""
      />
    </div>
  );
};

export default MainHeading;
