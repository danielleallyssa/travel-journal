import "./ImageBlock.css";
const ImageBlock = (data) => {
  const { title, image } = data;
  return (
    <div className="feature--image-wrapper">
      <img className="feature--image" src={image} alt={`${title} image`} />
    </div>
  );
};

export default ImageBlock;
