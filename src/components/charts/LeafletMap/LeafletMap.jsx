import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import './leaf.css'
import "leaflet/dist/leaflet.css";
import markerImage from "./marker-icon.png";
import markerShadow from "./marker-shadow.png";
const defaultIcon = new Icon({
  iconUrl: markerImage,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function MapMarkers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/countries"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="myleaf-container">
      <h2>A line graph showing the cases fluctuations</h2>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: "600px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.map((country) => (
          <Marker
            position={[country.countryInfo.lat, country.countryInfo.long]}
            key={country.country}
            icon={defaultIcon} // explicitly set the marker icon to the default icon
          >
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Active Cases: {country.active}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapMarkers;
