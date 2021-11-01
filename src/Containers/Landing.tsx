import { FunctionComponent } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MainTitle from "../Components/LandingComps/MainTitle";
import BrandDescriptionCon from "../Components/LandingComps/BrandDescriptionCon";
import TestimonialsCon from "../Components/LandingComps/TestimonialsCon";

const Landing: FunctionComponent = () => {
  return (
    <div className="bg-off-white sm:container mx-auto relative">
      <Header></Header>
      <MainTitle></MainTitle>
      <BrandDescriptionCon></BrandDescriptionCon>
      <TestimonialsCon></TestimonialsCon>
      <Footer></Footer>
    </div>
  );
};

export default Landing;
