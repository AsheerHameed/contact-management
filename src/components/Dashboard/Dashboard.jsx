import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./dashboard.css";
import ContactForm from "../contacts/ContactForm";
import ChartsAndMaps from "../charts/MapContainer";
import Sidebar from "../sidebar/Sidebar";
import LineChart from "../charts/LineGraph/LineGraph";
import LeafletMap from "../charts/LeafletMap/LeafletMap";
const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/charts-and-maps">Charts and Maps</Link>
            <ul>
              <li>
                <Link to="/charts-and-maps/line-chart">Line Chart</Link>
              </li>
              <li>
                <Link to="/charts-and-maps/leaflet-map">Map</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/sidebar">Sidebar</Link>
          </li>
        </ul>
        
      </div>

      <div className="content-container">
        <div className="hamburger" onClick={handleMenuToggle}>
          <div className="hamburger-icon"></div>
        </div>
        <div
          className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}
          onClick={handleMenuToggle}
        >
          <ul>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/charts-and-maps">Charts and Maps</Link>
              <ul className="charts-maps">
                <li>
                  <Link to="/charts-and-maps/line-chart">Line Chart</Link>
                </li>
                <li>
                  <Link to="/charts-and-maps/leaflet-map">Map</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/sidebar">Sidebar</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/contact-management"
            element={
              <div className="welcome-heading">
                <h1>
                  Welcome to contact management app
                </h1>
                <p>Use side bar to access the navigation options </p>
              </div>
            }
          />
          <Route
            path="/contacts"
            element={<ContactForm className="contact-form-container" />}
          />
          <Route
            path="/charts-and-maps"
            element={<ChartsAndMaps className="charts-and-maps-container" />}
          />
          <Route
            path="/charts-and-maps/line-chart"
            element={<LineChart className="linechart" />}
          />
          <Route
            path="/charts-and-maps/leaflet-map"
            element={<LeafletMap className="leaflet-map" />}
          />
          <Route
            path="/sidebar"
            element={<Sidebar className="sidebar-container" />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
