import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface Props {
  heading: string;
  content: string;
}

const BrandDescription: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <h2 className="font-serif">{props.heading}</h2>
      <p>{props.content}</p>
      <Link to="#" className="uppercase font-serif">
        Learn more
      </Link>
    </section>
  );
};

export default BrandDescription;
