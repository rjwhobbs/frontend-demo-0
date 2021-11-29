import { FunctionComponent } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MainTitle from "../Components/LandingComps/MainTitle";
import BrandDescriptionCon from "../Components/LandingComps/BrandDescriptionCon";
import TestimonialsCon from "../Components/LandingComps/TestimonialsCon";
import Gallery from "../Components/LandingComps/Gallery";

const Landing: FunctionComponent = () => {
  return (
    <div className="bg-off-white 2xl:container mx-auto relative">
      <Header></Header>
      <MainTitle></MainTitle>
      <BrandDescriptionCon></BrandDescriptionCon>
      <TestimonialsCon></TestimonialsCon>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
};

export default Landing;
