import { FunctionComponent } from "react";
import { TestimonialsProps } from "./LandingProps";

const Testimonials: FunctionComponent<TestimonialsProps> = (props) => {
  const { testimonial, author, title } = props;

  return (
    <figure>
      <blockquote>
        <p>{testimonial}</p>
      </blockquote>
      <figcaption>
        <div className="font-serif">{author}</div>
        <div>{title}</div>
      </figcaption>
    </figure>
  );
};

export default Testimonials;
