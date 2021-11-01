import { FunctionComponent } from "react";

import coneDT from "url:../../../public/images/desktop/image-gallery-cone.jpg";
import coneM from "url:../../../public/images/mobile/image-gallery-cone.jpg";
import milkDT from "url:../../../public/images/desktop/image-gallery-milkbottles.jpg";
import milkM from "url:../../../public/images/mobile/image-gallery-milkbottles.jpg";
import orangeDT from "url:../../../public/images/desktop/image-gallery-orange.jpg";
import orangeM from "url:../../../public/images/mobile/image-gallery-orange.jpg";
import sugarDT from "url:../../../public/images/desktop/image-gallery-sugarcubes.jpg";
import sugarM from "url:../../../public/images/mobile/image-gallery-sugar-cubes.jpg";

const Gallery: FunctionComponent = () => {
  return (
    <div className="mt-20 md:mt-36 grid grid-cols-8">
      <picture className="col-span-4 sm:col-span-2">
        <source media="(min-width: 640px)" srcSet={milkDT as string} />
        <img src={milkM as string} alt="" />
      </picture>
      <picture className="col-span-4 sm:col-span-2">
        <source media="(min-width: 640px)" srcSet={orangeDT as string} />
        <img src={orangeM as string} alt="" />
      </picture>
      <picture className="col-span-4 sm:col-span-2">
        <source media="(min-width: 640px)" srcSet={coneDT as string} />
        <img src={coneM as string} alt="" />
      </picture>
      <picture className="col-span-4 sm:col-span-2">
        <source media="(min-width: 640px)" srcSet={sugarDT as string} />
        <img src={sugarM as string} alt="" />
      </picture>
    </div>
  );
};

export default Gallery;
