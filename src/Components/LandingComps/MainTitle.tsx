import { FunctionComponent } from "react";
import arrowDown from "url:../../../public/icons/icon-arrow-down.svg";

const MainTitle: FunctionComponent = () => {
  return (
    <div className="absolute top-43vw sm:top-28 md:top-32 lg:top-40 xl:top-48 w-full">
      <h1 className="uppercase leading-initial font-serif text-center tracking-widest text-white text-11vw sm:text-3xl md:text-4xl xl:text-5xl">
        We Are <br className="block sm:hidden" /> Creatives
      </h1>
      <img
        className="mx-auto sm:w-5 md:w-6 mt-7vw sm:mt-5 md:mt-7 lg:mt-16 xl:w-9 xl:mt-20"
        src={arrowDown as string}
        alt=""
      />
    </div>
  );
};

export default MainTitle;
