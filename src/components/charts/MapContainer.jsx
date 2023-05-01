import React from "react";
import "./map.css";
import { Link } from "react-router-dom";
const MapContainer = () => {
  return (
    <div className="map-container section__padding">
      <h1>Charts and Maps</h1>
      <h4>Navigate to different charts using below links</h4>
      <ul>
        <li>
          <Link to="/charts-and-maps/leaflet-map">Map</Link>
          <br />
        </li>
        <li>
          <Link to="/charts-and-maps/line-chart">Line Chart</Link>
        </li>
      </ul>
    </div>
  );
};

export default MapContainer;
