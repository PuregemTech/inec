import './settings.css';
import Aside from '../../components/aside';
import NavBar from '../../components/navBar';
import {useState} from 'react';
import Profile from './profile';
import Alerts from './alerts';
import Sos from './sos';
import React from 'react';

const Settings = () => {
  const [activeContent, setActiveContent] = useState (1);
  const [activeClick, setActiveClick] = useState ('click1');
  const [contents] = useState ([
    {
      id: 1,
      content: <Profile />,
    },
    {
      id: 2,
      content: <Alerts />,
    },
    {
      id: 3,
      content: <Sos />,
    },
  ]);
  const handleActiveClick = name => {
    setActiveClick (name);
  };
  const handleClick = id => {
    setActiveContent (id);
    //console.log (id);
  };
  const activeContentContent = activeContent !== null
    ? contents.find (content => content.id === activeContent)
    : null;
  return (
    <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
      <div className="app-wrapper">
        <NavBar title="Settings" />
        <Aside />

        <main className="app-main app_main">
          <div className="main_container">
            <div className="user_header d-flex justify-content-center gap-4">
              <h6
                // onClick={() => {
                //   setShowContainer (true);
                //   handleActiveClick ('click1');
                // }}
                onClick={() => {
                  handleClick (1);
                  handleActiveClick ('click1');
                }}
                style={{
                  color: activeClick === 'click1' ? '#238f53' : '',
                  borderBottom: activeClick === 'click1'
                    ? '1px solid #238f53'
                    : '',
                  paddingBottom: '0.7rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                }}
              >
                Profile
              </h6>
              <h6
                // onClick={() => {
                //   setShowContainer (false);
                //   handleActiveClick ('click2');
                // }}
                onClick={() => {
                  handleClick (2);
                  handleActiveClick ('click2');
                }}
                style={{
                  color: activeClick === 'click2' ? '#238f53' : '',
                  borderBottom: activeClick === 'click2'
                    ? '1px solid #238f53'
                    : '',
                  paddingBottom: '0.7rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                }}
              >
                Alerts
              </h6>
              <h6
                onClick={() => {
                  handleClick (3);
                  handleActiveClick ('click3');
                }}
                style={{
                  color: activeClick === 'click3' ? '#238f53' : '',
                  borderBottom: activeClick === 'click3'
                    ? '1px solid #238f53'
                    : '',
                  paddingBottom: '0.7rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                }}
              >
                SOS
              </h6>
            </div>

            {activeContentContent &&
              <React.Fragment>{activeContentContent.content}</React.Fragment>}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
