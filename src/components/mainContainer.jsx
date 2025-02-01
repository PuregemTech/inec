import React, {useState} from 'react';
import Button from './button';
import InfoBox from './infoBox';
import LineChart from './lineChart';
import BarChart from './barChart';
import PieChart from './pieChart';
import Select from './select';
import {FiSearch} from 'react-icons/fi';
import Table from './table';
import TableFooter from './tableFooter';

const MainContainer = () => {
  const [showContainer, setShowContainer] = useState (true);
  //const [clicked, setClicked] = useState (false);
  const [activeClick, setActiveClick] = useState ('click1');

  const [showPending, setShowPending] = useState (true);
  const [reportActiveClick, setReportActiveClick] = useState ('click1');

  const handleActiveClick = name => {
    setActiveClick (name);
  };
  const handleReportActiveClick = name => {
    setReportActiveClick (name);
  };

  return (
    <div className="main_container">
      <div className="emergency_header">
        <div>
          <h6
            onClick={() => {
              setShowContainer (true);
              handleActiveClick ('click1');
            }}
            style={{
              color: activeClick === 'click1' ? '#238f53' : '',
              borderBottom: activeClick === 'click1' ? '1px solid #238f53' : '',
              paddingBottom: '0.7rem',
              cursor: 'pointer',
              fontSize: '0.9rem',
            }}
          >
            Analytics
          </h6>
          <h6
            onClick={() => {
              setShowContainer (false);
              handleActiveClick ('click2');
            }}
            style={{
              color: activeClick === 'click2' ? '#238f53' : '',
              borderBottom: activeClick === 'click2' ? '1px solid #238f53' : '',
              paddingBottom: '0.7rem',
              cursor: 'pointer',
              fontSize: '0.9rem',
            }}
          >
            Report
          </h6>
        </div>
        <div>
          <Button
            name="Export as png"
            style={{
              background: '#fff',
              border: '1px solid var(--color-primary)',
              color: 'var(--color-primary)',
            }}
          />
          <Button
            name="Export as cvv"
            style={{
              background: 'var(--color-primary)',
              color: 'rgba(255, 255, 255, 0.9)',
            }}
          />
        </div>
      </div>
      {showContainer &&
        <React.Fragment>
          {' '}<div className="first_section">
            <h6>Today</h6>
            <div className="first-section-cont">
              <InfoBox
                text="Total no. of reported alerts"
                numb="40"
                style={{background: 'lightgreen', maxWidth: 'none'}}
              />
              <InfoBox
                text="Total no. of unassigned alerts"
                numb="30"
                style={{background: '#b8b8a7', maxWidth: 'none'}}
              />
              <InfoBox
                text="Total no. of resolved alerts"
                numb="100"
                style={{background: '#C7B8EA', maxWidth: 'none'}}
              />
              <InfoBox
                text="Total no. of unresolved alerts"
                numb="10"
                style={{background: '#c5c510', maxWidth: 'none'}}
              />
            </div>

          </div>
          <div className="first_section">
            {/* <h6>Today</h6> */}
            <LineChart />
          </div>
          <div className="first_section">
            <h6>Today</h6>
            <div className="chart_container">
              <div className="bar_chat">
                <BarChart />
              </div>
              <div className="pie-chart">
                <PieChart />
              </div>
            </div>
          </div>{' '}
        </React.Fragment>}
      {!showContainer &&
        <React.Fragment>
          <div className="report_header">
            <div className="report_cont">
              <h6 className="efs_">Filter By:</h6><Select name="Date" />
              <Select name="State" />
              <Select name="LGA" />
            </div>
            <h6 className="efs_" style={{textAlign: 'end', color: '#ce3232'}}>
              Reset Filter
            </h6>
          </div>
          <div className="table_container">
            <div className="report_table_header">
              <div>
                <div
                  className="efs_"
                  onClick={() => {
                    setShowPending (true);
                    handleReportActiveClick ('click1');
                  }}
                  style={{
                    color: reportActiveClick === 'click1' ? '#238f53' : '',
                    borderBottom: reportActiveClick === 'click1'
                      ? '1px solid #238f53'
                      : '',
                    paddingBottom: '0.7rem',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                  }}
                >
                  Pending
                </div>
                <div
                  className="efs_"
                  onClick={() => {
                    setShowPending (false);
                    handleReportActiveClick ('click2');
                  }}
                  style={{
                    color: reportActiveClick === 'click2' ? '#238f53' : '',
                    borderBottom: reportActiveClick === 'click2'
                      ? '1px solid #238f53'
                      : '',
                    paddingBottom: '0.7rem',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                  }}
                >
                  Resolved

                </div>
              </div>
              <div className="search_box">
                <input type="text" placeholder="Search" />
                <FiSearch className="search_icon" />
              </div>
            </div>
            {showPending &&
              <div className="table_content mt-3">
                <Table name="Unresolved" title="Incident Type" />
                <TableFooter />
              </div>}
            {!showPending &&
              <div className="table_content mt-3">
                <Table name="Resolved" title="Incident Type" />
                <TableFooter />
              </div>}
          </div>
        </React.Fragment>}
    </div>
  );
};

export default MainContainer;
