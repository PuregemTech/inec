import {Link, NavLink} from 'react-router-dom';
import {RiLogoutBoxRFill} from 'react-icons/ri';
import {CiSettings} from 'react-icons/ci';
import {MdOutlineManageAccounts} from 'react-icons/md';
import {TbRefreshAlert} from 'react-icons/tb';
import {MdBugReport} from 'react-icons/md';
import {MdSpaceDashboard} from 'react-icons/md';
import Logo from '../images/logo.jpg';

const Aside = () => {
  return (
    <aside className="app-sidebar bg-body-secondary" data-bs-theme="dark">
      <div
        className="sidebar-brand primary-color"
        style={{borderBottom: 'none'}}
      >
        <Link to="/dashboard" className="brand-link">

          <img
            src={Logo}
            alt="INEC__Logo"
            className="brand-image opacity-75 shadow"
          />
          <span className="brand-text fw-light fsi-1">
            Security Alert <br /> Notification System
          </span>
        </Link>
      </div>
      <div
        className="sidebar-wrapper primary-color"
        style={{paddingTop: '1.5rem'}}
      >
        <nav className="mt-2">
          <ul
            className="nav sidebar-menu flex-column"
            data-lte-toggle="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link place-center">
                <MdSpaceDashboard className="nav-icon" />
                <p>
                  Dashboard
                  <i className="nav-arrow bi bi-chevron-right" />
                </p>
              </NavLink>
            </li>
            <li className="nav-item">
              <Link to="/emergency" class="nav-link place-center">
                <MdBugReport className="nav-icon" />
                <p>Emergency Report</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/alerts" class="nav-link place-center">
                <TbRefreshAlert className="nav-icon" />
                <p>Alerts</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user_management" class="nav-link place-center">
                <MdOutlineManageAccounts className="nav-icon" />
                <p>User Management</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/settings" class="nav-link place-center">
                <CiSettings className="nav-icon" />
                <p>Settings</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/inec" class="nav-link place-center">
                <RiLogoutBoxRFill className="nav-icon" />
                <p>Logout</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Aside;
