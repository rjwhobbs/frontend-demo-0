import { FunctionComponent } from "react";
import Header from "../Components/Header";
import Testimonials from "../Components/LandingComps/Testimonials";
import Footer from "../Components/Footer";
import MainTitle from "../Components/LandingComps/MainTitle";
import BrandDescriptionCon from "../Components/LandingComps/BrandDescriptionCon";

const testimonials = [
  "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
  "Sunnyside's enthusiasm coupled their keen interest in our brand's success made it a satisfying and enjoyable experience.",
  "Incredible end result! our sales increased of 400% when we worked with Sunnyside. Highly recommended.",
];

const Landing: FunctionComponent = () => {
  return (
    <div className="bg-off-white sm:container mx-auto relative">
      <Header></Header>
      <MainTitle></MainTitle>
      <BrandDescriptionCon></BrandDescriptionCon>
      <h2 className="uppercase font-serif">Client Testimonials</h2>
      <Testimonials
        author={"Emily R"}
        title={"Marketing Director"}
        testimonial={testimonials[0]}
      ></Testimonials>
      <Testimonials
        author={"Thomas S."}
        title={"Chief Operating Officer"}
        testimonial={testimonials[1]}
      ></Testimonials>
      <Testimonials
        author={"Jennie F."}
        title={"Business Owner"}
        testimonial={testimonials[2]}
      ></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Landing;
