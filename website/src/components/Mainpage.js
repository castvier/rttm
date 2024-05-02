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
            <p className='aboutUsP'>
              The primary aim of our project is to enhance the efficiency of intelligent transportation planning through advanced vehicle detection techniques. Leveraging the robustness of 3D LiDAR technology, we endeavor to overcome the limitations faced by traditional 2D vehicle detection methods under adverse weather conditions like fog, rain, snow, and extreme winds. Our project introduces an innovative system designed to capture, process, and analyze real-time traffic flow data using 3D LiDAR cameras strategically deployed along highways and freeways, areas where existing research on 3D vehicle detection, typically focused on autonomous driving, falls short.
              Our system stands out by offering a comprehensive web-based service that not only detects and classifies vehicles in real-time traffic flows but also presents this data through dynamic, user-friendly visualizations. This approach facilitates a deeper understanding of traffic patterns, supporting more informed decisions in traffic management and planning. By bridging the gap in current research and applying 3D LiDAR technology in a novel context, our project sets a new standard for real-time vehicle detection and traffic data analysis, promising significant improvements in the field of intelligent transportation systems.
            </p>
          </div>
        </div>

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