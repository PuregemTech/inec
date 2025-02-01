import React, {useState} from 'react';
import './alerts.css';
import Aside from '../../components/aside';
import NavBar from '../../components/navBar';
import Button from '../../components/button';
import TableFooter from '../../components/tableFooter';
import Table from '../../components/table';
import {FiSearch} from 'react-icons/fi';
import Select from '../../components/select';

const Alerts = () => {
  // const [showContainer, setShowContainer] = useState (true);
  // const [clicked, setClicked] = useState (false);
  const [activeClick, setActiveClick] = useState ('click2');

  const [showPending, setShowPending] = useState (true);
  const [reportActiveClick, setReportActiveClick] = useState ('click1');

  const handleActiveClick = name => {
    setActiveClick (name);
  };
  const handleReportActiveClick = name => {
    setReportActiveClick (name);
  };
  return (
    <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
      <div className="app-wrapper">
        <NavBar title="Alerts" />
        <Aside />
        <main className="app-main app_main">
          {/* <MainContainer /> */}

          <div className="main_container">
            <div className="emergency_header">
              <div>
                <h6
                  // onClick={() => {
                  //   setShowContainer (true);
                  //   handleActiveClick ('click1');
                  // }}
                  style={{
                    // color: activeClick === 'click1' ? '#238f53' : '',
                    // borderBottom: activeClick === 'click1'
                    //   ? '1px solid #238f53'
                    //   : '',
                    paddingBottom: '0.7rem',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                  }}
                >
                  Analytics
                </h6>
                <h6
                  // onClick={() => {
                  //   setShowContainer (true);
                  //   handleActiveClick ('click2');
                  // }}
                  style={{
                    color: '#238f53',
                    borderBottom: '1px solid #238f53',
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

            <React.Fragment>
              <div className="report_header">
                <div className="report_cont">
                  <h6 className="efs_">Filter By:</h6><Select name="Date" />
                  <Select name="State" />
                  <Select name="LGA" />
                </div>
                <h6
                  className="efs_"
                  style={{textAlign: 'end', color: '#ce3232'}}
                >
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
                    <Table name="Unresolved" title="Alert Type" />
                    <TableFooter />
                  </div>}
                {!showPending &&
                  <div className="table_content mt-3">
                    <Table name="Resolved" title="Alert Type" />
                    <TableFooter />
                  </div>}
              </div>
            </React.Fragment>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Alerts;
