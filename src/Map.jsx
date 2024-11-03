import "./Map.css";
const Map = (data) => {
  const { location, googleMapUrl } = data;
  return (
    <div className="feature--detail-content">
      <img
        className="feature--icon--image"
        src="./src/assets/Pin.svg"
        alt="icon image"
      />
      <h3 className="feature--country">{location}</h3>
      <a className="feature--map" href={googleMapUrl}>
        View on Google Maps
      </a>
    </div>
  );
};

export default Map;
