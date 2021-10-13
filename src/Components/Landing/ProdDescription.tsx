import { FunctionComponent } from "react";
import { DesProps } from "./LandingProps";

const ProdDescription: FunctionComponent<DesProps> = (props) => {
  const { heading, content } = props;
  return (
    <div>
      <h3 className="font-serif">{heading}</h3>
      <p>{content}</p>
    </div>
  );
};

export default ProdDescription;
