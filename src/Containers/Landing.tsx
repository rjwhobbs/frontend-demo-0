import { FunctionComponent } from "react";
import Header from "../Components/Header";
import BrandDescription from "../Components/Landing/BrandDescription";
import ProdDescription from "../Components/Landing/ProdDescription";
import Testimonials from "../Components/Landing/Testimonials";
import Footer from "../Components/Footer";

const content = [
  "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
  "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and expand your brand in digital places.",
  "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
  "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
];

const testimonials = [
  "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
  "Sunnyside's enthusiasm coupled their keen interest in our brand's success made it a satisfying and enjoyable experience.",
  "Incredible end result! our sales increased of 400% when we worked with Sunnyside. Highly recommended.",
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
      <ProdDescription
        heading={"Graphic Design"}
        content={content[2]}
      ></ProdDescription>
      <ProdDescription
        heading={"Photography"}
        content={content[3]}
      ></ProdDescription>
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
    </>
  );
};

export default Landing;