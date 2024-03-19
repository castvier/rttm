import React from "react";
import { Link } from "react-router-dom";
import "./subcomponents/sub-technologies/technologies.css";

const Technologies = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          {/* Technology Section */}
          <div className="col technology-section">
            <h2 className="techH">Technologies Used</h2>
            <p className="techP">
              Our Real-Time Traffic Monitoring project leverages a range of cutting-edge technologies to achieve accurate and efficient vehicle detection and analysis. We utilize the following tools and platforms:
            </p>
            <ul className="tech-list">
              <li>
                <a href="https://velodynelidar.com/" target="_blank" rel="noopener noreferrer">Velodyne LiDAR</a>: High-resolution 3D environmental scanning for precise vehicle detection and tracking.
              </li>
              <li>
                <a href="https://www.intelrealsense.com/" target="_blank" rel="noopener noreferrer">Intel RealSense</a>: Depth-sensing cameras for enhanced object recognition and classification.
              </li>
              <li>
                <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">Amazon Web Services (AWS)</a>: Scalable and reliable cloud computing infrastructure for data storage, processing, and deployment.
              </li>
              <li>
                <a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">PyTorch</a>: Powerful deep learning framework for developing and training advanced machine learning models.
              </li>
              <li>
                <a href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer">MATLAB</a>: Versatile numerical computing environment for data analysis, visualization, and algorithm development.
              </li>
              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>: JavaScript library for building interactive and responsive user interfaces.
              </li>
              <li>
                <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a>: CSS framework for creating responsive and mobile-first web designs.
              </li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="col">
            <h2 className="techH">Skills Applied</h2>
            <p className="techP">
              Throughout the development of this project, our team has applied a diverse set of skills to ensure the success and effectiveness of our Real-Time Traffic Monitoring system:
            </p>
            <ul className="tech-skills-list">
              <li>Cloud Computing: Leveraging AWS services for scalable and efficient data storage, processing, and deployment.</li>
              <li>Machine Learning: Developing and training advanced deep learning models using PyTorch for accurate vehicle detection and classification.</li>
              <li>Data Processing: Utilizing MATLAB for data analysis, preprocessing, and visualization to gain insights from the collected traffic data.</li>
              <li>Frontend Development: Creating interactive and user-friendly interfaces using React and Bootstrap to enhance the user experience.</li>
              <li>3D Environmental Scanning: Employing LiDAR technology, specifically Velodyne LiDAR, for high-resolution 3D scanning of traffic environments.</li>
              <li>Real-time Data Streaming: Implementing efficient data streaming mechanisms to enable real-time monitoring and analysis of traffic flow.</li>
              <li>Data Visualization: Presenting traffic data in a visually compelling and informative manner to facilitate easy interpretation and decision-making.</li>
              <li>System Integration: Integrating various components, such as sensors, databases, and cloud services, to create a cohesive and functional system.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;