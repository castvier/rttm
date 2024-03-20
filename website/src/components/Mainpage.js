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
        <div className="row row-cols-2 row-cols-xxl-3 gy-2 gx-2">
          {/* Other content */}
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
    </section>
  );
};

export default Mainpage;