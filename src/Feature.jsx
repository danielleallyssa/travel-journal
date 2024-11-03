import ContentBlock from "./ContentBlock";
import ImageBlock from "./ImageBlock";
import "./Feature.css";

const Feature = (data) => {
  return (
    <div className="feature--card">
      <ImageBlock {...data} />
      <ContentBlock {...data} />
    </div>
  );
};

export default Feature;
