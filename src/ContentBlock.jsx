import Map from "./Map";
import "./ContentBlock.css";

const ContentBlock = (data) => {
  const { title, dateRange, description } = data;
  return (
    <div className="feature--content-wrapper">
      <Map {...data} />
      <h2 className="feature--title">{title}</h2>
      <span className="feature--dates">{dateRange}</span>
      <p className="feature--text">{description}</p>
    </div>
  );
};

export default ContentBlock;
