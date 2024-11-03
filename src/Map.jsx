import "./Map.css";
import icon from "./assets/Pin.svg";

const Map = (data) => {
  const { location, googleMapUrl } = data;
  return (
    <div className="feature--detail-content">
      <img className="feature--icon--image" src={icon} alt="icon image" />
      <h3 className="feature--country">{location}</h3>
      <a className="feature--map" href={googleMapUrl}>
        View on Google Maps
      </a>
    </div>
  );
};

export default Map;
