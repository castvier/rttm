import React from "react";
import { Link } from "react-router-dom";
import "./subcomponents/sub-technologies/technologies.css";

const Technologies = () => {
  return (
    <section className="technologies-section">
      <div className="container-fluid">
        <div className="row">
          {/* Technology Section */}
          <div className="col-md-6 technology-section">
            <h2 className="section-heading">Technologies Used</h2>
            <p className="section-description">
              Our Real-Time Traffic Monitoring project leverages a range of
              cutting-edge technologies to achieve accurate and efficient
              vehicle detection and analysis. We utilize the following tools and
              platforms:
            </p>
            <ul className="tech-list">
              <li>
                <a
                  href="https://velodynelidar.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Velodyne LiDAR
                </a>
                : High-resolution 3D environmental scanning for precise vehicle
                detection and tracking.
              </li>
              <li>
                <a
                  href="https://www.intelrealsense.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Intel RealSense
                </a>
                : Depth-sensing cameras for enhanced object recognition and
                classification.
              </li>
              <li>
                <a
                  href="https://aws.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amazon Web Services (AWS)
                </a>
                : Scalable and reliable cloud computing infrastructure for data
                storage, processing, and deployment.
              </li>
              <li>
                <a
                  href="https://pytorch.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PyTorch
                </a>
                : Powerful deep learning framework for developing and training
                advanced machine learning models.
              </li>
              <li>
                <a
                  href="https://www.mathworks.com/products/matlab.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MATLAB
                </a>
                : Versatile numerical computing environment for data analysis,
                visualization, and algorithm development.
              </li>
              <li>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
                : JavaScript library for building interactive and responsive
                user interfaces.
                <img
                  src={process.env.PUBLIC_URL + "/images/img-technologies/ReactJS-Framework-Benefits.png"}
                  alt="React"
                  className="tech-image"
                />
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bootstrap
                </a>
                : CSS framework for creating responsive and mobile-first web
                designs.
                <img
                  src={process.env.PUBLIC_URL + "/images/img-technologies/Bootstrap+React.png"}
                  alt="Bootstrap"
                  className="tech-image"
                />
              </li>
            </ul>
          </div>
          <div className="col-md-6 skills-section">
            <h2 className="section-heading">Skills Applied</h2>
            <p className="section-description">
              Throughout the development of this project, our team has applied a
              diverse set of skills to ensure the success and effectiveness of
              our Real-Time Traffic Monitoring system:
            </p>
            <ul className="tech-skills-list">
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/img-technologies/DataAcquisitionImg.png"}
                  alt="Data Processing"
                  className="tech-image"
                />
                Data Processing: Utilizing MATLAB for data analysis,
                preprocessing, and visualization to gain insights from the
                collected traffic data.
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/img-technologies/TechnologyLidarPicture.png"}
                  alt="3D Environmental Scanning"
                  className="tech-image"
                />
                3D Environmental Scanning: Employing LiDAR technology,
                specifically Velodyne LiDAR, for high-resolution 3D scanning of
                traffic environments.
              </li>
              <li>
                Cloud Computing: Leveraging AWS services for scalable and
                efficient data storage, processing, and deployment.
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/img-technologies/TechnologyTrafficPicture.png"}
                  alt="Traffic Analysis"
                  className="tech-image"
                />
                Traffic Analysis: Applying data analytics techniques to derive
                meaningful insights from traffic patterns, congestion levels,
                and vehicle behavior.
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/img-technologies/techused.jpg"}
                  alt="Web Development"
                  className="tech-image"
                />
                Web Development: Creating interactive and user-friendly web
                interfaces using modern web development technologies to present
                traffic data effectively.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Add spacing at the bottom */}
      <div style={{ marginBottom: "10rem" }}></div>
    </section>
  );
};



export default Technologies;