import './user_management.css';
import Aside from '../../components/aside';
import NavBar from '../../components/navBar';
import Button from '../../components/button';
import TableFooter from '../../components/tableFooter';
import {FiSearch} from 'react-icons/fi';
import {useState} from 'react';
import UserManagementTable from '../../components/userManagementTable';

const UserManagement = () => {
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
        <NavBar title="User Management" />
        <Aside />

        <main className="app-main app_main">
          <div className="main_container">
            <div className="emergency_header justify-content-end mb-3">
              <div>
                <Button
                  name="Hide passwords"
                  style={{
                    background: '#fff',
                    border: '1px solid var(--color-primary)',
                    color: 'var(--color-primary)',
                    width: '7rem',
                  }}
                />
                <Button
                  name="+ New User"
                  style={{
                    background: 'var(--color-primary)',
                    color: 'rgba(255, 255, 255, 0.9)',
                    width: '7rem',
                  }}
                />
              </div>
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
                    Active
                  </div>
                  <div
                    className="efs_"
                    // onClick={() => {
                    //   setShowPending (false);
                    //   handleReportActiveClick ('click2');
                    // }}
                    style={{
                      // color: reportActiveClick === 'click2' ? '#238f53' : '',
                      // borderBottom: reportActiveClick === 'click2'
                      //   ? '1px solid #238f53'
                      //   : '',
                      paddingBottom: '0.7rem',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                    }}
                  >
                    Pending

                  </div>
                </div>
                <div className="search_box">
                  <input type="text" placeholder="Search" />
                  <FiSearch className="search_icon" />
                </div>
              </div>
              {showPending &&
                <div className="table_content mt-3">
                  <UserManagementTable />
                  <TableFooter />
                </div>}
              {/* {!showPending &&
                <div className="table_content mt-3">
                  <Table name="Resolved" title="Alert Type" />
                  <TableFooter />
                </div>} */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserManagement;
