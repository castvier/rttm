import React, { useState } from 'react';
import "./subcomponents/sub-features/Features.css";
import frameworkImage from './Framework.png';

const ImageModal = ({ selectedImage, handleCloseModal }) => {
  return (
    <div className="modal" onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleCloseModal}>&times;</span>
        <img src={selectedImage} alt="Enlarged" className="modal-image" />
      </div>
    </div>
  );
};

const Features = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = () => {
    setSelectedImage(frameworkImage);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="features-container">
      <h1 className="features-title">Features</h1>
      <div className="framework-image-container">
        <h2 className="framework-title">Framework</h2>
        <img
          src={frameworkImage}
          alt="Framework"
          className="framework-image"
          onClick={handleImageClick}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <section className="feature-section">
        <h2>Real-Time Traffic Monitoring (RTTM) System</h2>
        <p>
          The Real-Time Traffic Monitoring (RTTM) System is a comprehensive solution designed to provide accurate and up-to-date information about traffic patterns, vehicle movements, and road conditions. This system leverages cutting-edge technologies, including LiDAR sensors, advanced data processing algorithms, and a user-friendly web interface, to deliver valuable insights for effective traffic management and decision-making.
        </p>
      </section>

      <section className="feature-section">
        <h2>Major Features</h2>
        <div className="feature-item">
          <h3>Data Processing Unit</h3>
          <ul>
            <li>Advanced algorithms for data filtering, denoising, and ground plane estimation to remove noise, outliers, and irrelevant data points from the raw point cloud.</li>
            <li>Sophisticated clustering and segmentation techniques to group points into distinct objects, representing potential vehicles or other objects of interest.</li>
            <li>Parallel processing and machine learning algorithms for efficient and accurate object classification and feature extraction.</li>
          </ul>
        </div>

        <div className="feature-item">
          <h3>Historical Data Storage and Analysis</h3>
          <ul>
            <li>Efficient storage and retrieval of processed traffic data at various time intervals (per second, per minute, per 5 minutes, and per hour).</li>
            <li>Aggregation and storage of historical data for long-term analysis and trend identification.</li>
            <li>API endpoints for accessing historical data, vehicle type counts, lane vehicle counts, and lane type counts.</li>
          </ul>
        </div>

        <div className="feature-item">
          <h3>Historical and Real-Time(soon) Traffic Visualization</h3>
          <ul>
            <li>Interactive maps and heatmaps for visualizing real-time traffic patterns and congestion levels.</li>
            <li>Time-series charts and graphs to track vehicle counts, average speeds, and densities over time.</li>
            <li>Customizable data displays and filters based on location, time, or vehicle types.</li>
          </ul>
        </div>

        <div className="feature-item">
          <h3>User Authentication and Access Control</h3>
          <ul>
            <li>Secure user authentication system with role-based access control.</li>
            <li>Ability to manage user accounts, assign roles, and control access to specific system features and data.</li>
          </ul>
        </div>

        <div className="feature-item">
          <h3>Vehicle Management</h3>
          <ul>
            <li>CRUD (Create, Read, Update, Delete) operations for managing vehicle data, including modifications, history, and detection events.</li>
            <li>Real-time tracking and monitoring of individual vehicles, enabling detailed analysis and event logging.</li>
          </ul>
        </div>

        <div className="feature-item">
          <h3>Responsive Web Interface</h3>
          <ul>
            <li>Intuitive and user-friendly web interface for seamless access to the RTTM system's features and data.</li>
            <li>Optimized for various devices and screen sizes, ensuring a consistent and responsive experience across platforms.</li>
          </ul>
        </div>

        <div className="feature-item">
          <h3>Integration and Extensibility</h3>
          <ul>
            <li>Open architecture and well-documented APIs, allowing for seamless integration with third-party systems and applications.</li>
            <li>Modular design, enabling easy extension and customization to accommodate future requirements and new technologies.</li>
          </ul>
        </div>
      </section>
      {selectedImage && (
        <ImageModal selectedImage={selectedImage} handleCloseModal={handleCloseModal} />
      )}
      <div style={{ marginBottom: "12rem" }}></div>
    </div>
  );
};

export default Features;