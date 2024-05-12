import React from "react";
import StackedArea from './subcomponents/sub-graph/StackedArea';
import Bar from './subcomponents/sub-graph/Bar';
import PieChart from './subcomponents/sub-graph/PieChart';
import './subcomponents/sub-graph/charts.css';
import StackedBar from "./subcomponents/sub-graph/StackedBar";
import Density from "./subcomponents/sub-graph/Density";
import '../index.css';

const Mainpage = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="box">
          <h1 className="about-title">Our Project Introduction</h1>
          <div className="main-content">
                    {/* GitHub link container */}
        <div className="github-link-container">
          <a
            href="https://github.com/CalTransProject/rttm"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '1.6rem', color: '#D22030', textDecoration: 'underline' }}
          >
            GitHub Repository
          </a>
        </div>
            <p className='aboutUsP'>
            The primary aim of our project is to enhance the efficiency of intelligent transportation planning through the integration of both 2D and 3D vehicle detection technologies. Initially designed to harness the capabilities of 3D LiDAR technology, practical deployment has predominantly utilized 2D vehicle detection using the advanced YOLOv7 tiny algorithm. This strategic pivot aligns with our immediate technological capabilities and resource availability, while keeping future integration of 3D systems in view.

Our system efficiently captures, processes, and analyzes real-time traffic flow data. An essential part of our setup is the Enhanced Historical Data Visualization System, which facilitates a comprehensive analysis and visualization of historical traffic data. This feature aids in understanding long-term traffic patterns and supports informed decision-making in traffic management and planning.

The selection of YOLOv7 tiny for our 2D model capitalizes on its efficiency and minimal computational requirements, ideal for real-time applications crucial to our project's objectives.

Although our ultimate goal includes leveraging full 3D LiDAR capabilities to advance the field of real-time vehicle detection, the focus on refining 2D detection technologies sets a robust benchmark for ongoing traffic data analysis. This strategy not only meets current operational demands but also establishes a scalable framework for future enhancements, aiming to significantly improve the effectiveness of intelligent transportation systems.
            </p>
          </div>
        </div>



        <div className="row row-cols-2 row-cols-xxl-3 gy-2 gx-2">
          <div className="col">
            <div className="box">
              <div className="chart">
                <StackedArea />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="box">
              <div className="chart">
                <Bar />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="box">
              <div className="chart">
                <PieChart />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="box">
              <div className="chart">
                <StackedBar />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="box">
              <div className="chart">
                <Density />
              </div>
            </div>
          </div>
        </div>
      </div>
            {/* Add spacing at the bottom */}
      <div style={{ marginBottom: "12rem" }}></div>
    </section>
  );
};

export default Mainpage;