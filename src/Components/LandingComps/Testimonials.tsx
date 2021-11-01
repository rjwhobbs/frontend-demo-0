import { FunctionComponent } from "react";
import { TestimonialsProps } from "./LandingProps";

import jennie from "url:../../../public/images/image-jennie.jpg";
import emily from "url:../../../public/images/image-emily.jpg";
import thomas from "url:../../../public/images/image-thomas.jpg";

const Testimonials: FunctionComponent<TestimonialsProps> = (props) => {
  const { testimonial, author, title } = props;

  let imgSrc = jennie as string;

  if (author == "Emily R.") {
    imgSrc = emily as string;
  } else if (author == "Thomas S.") {
    imgSrc = thomas as string;
  }

  return (
    <>
      <img className="w-20 mx-auto rounded-full" src={imgSrc} alt={author} />
      <figure className="mt-6 lg:mt-16 text-center">
        <blockquote>
          <p className="text-grey-blue">{testimonial}</p>
        </blockquote>
        <figcaption className="mt-6 sm:mt-10 md:mt-16">
          <div className="font-serif text-desat-blue">{author}</div>
          <div className="mt-1 text-light-grey">{title}</div>
        </figcaption>
      </figure>
    </>
  );
};

export default Testimonials;
