import { FunctionComponent } from "react";
import Testimonials from "./Testimonials";

const testimonials = [
  "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
  "Sunnyside's enthusiasm coupled their keen interest in our brand's success made it a satisfying and enjoyable experience.",
  "Incredible end result! our sales increased of 400% when we worked with Sunnyside. Highly recommended.",
];

const TestimonialsCon: FunctionComponent = () => {
  return (
    <div>
      <h2 className="mt-20 md:mt-36 text-center text-2xl uppercase font-serif text-light-grey">
        Client Testimonials
      </h2>
      <div className="mt-20 w-4/5 mx-auto block sm:grid grid-cols-12 gap-6">
        <div className="mt-16 sm:mt-0 col-span-6 lg:col-span-4">
          <Testimonials
            author={"Emily R."}
            title={"Marketing Director"}
            testimonial={testimonials[0]}
          ></Testimonials>
        </div>
        <div className="mt-16 sm:mt-0 col-span-6 lg:col-span-4">
          <Testimonials
            author={"Thomas S."}
            title={"Chief Operating Officer"}
            testimonial={testimonials[1]}
          ></Testimonials>
        </div>
        <div className="mt-16 sm:mt-10 lg:mt-0 col-span-6 col-start-4 lg:col-start-9 lg:col-span-4">
          <Testimonials
            author={"Jennie F."}
            title={"Business Owner"}
            testimonial={testimonials[2]}
          ></Testimonials>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCon;
