import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.MapContainer}>
      <MapContainer
        center={lat ? [lat, lng] : [51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={lat ? [lat, lng] : [51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <SetCurrentCity position={lat ? [lat, lng] : [51.505, -0.09]} />
      </MapContainer>
    </div>
  );
}
function SetCurrentCity({ position }) {
  const map = useMap();
  map.setView(position);
}

export default Map;
