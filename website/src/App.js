import React from 'react';
import Header from "./components/page-components/Header";
import Footer from "./components/page-components/Footer";
import MainPage from "./components/Mainpage";
import Technologies from "./components/Technologies";
import CameraManagement from "./components/CameraManagement";
import General from "./components/camera-management-subpages/General";
import Configuration from "./components/camera-management-subpages/Configuration";
import NewCamera from "./components/camera-management-subpages/NewCamera";
import RemoveCameras from "./components/camera-management-subpages/RemoveCameras";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import VideoPlayer from "./components/VideoPlayer";
import Features from "./components/Features"; // Import the Features component
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/video-player" element={<VideoPlayer />} />
          <Route path="/camera-management" element={<CameraManagement />}>
            <Route path="general" element={<General />} />
            <Route path="new-camera" element={<NewCamera />} />
            <Route path="remove-cameras" element={<RemoveCameras />} />
            <Route path="configuration" element={<Configuration />} />
          </Route>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/features" element={<Features />} /> {/* Add the Features route */}
          <Route path="/about-us" element={<AboutUs />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;