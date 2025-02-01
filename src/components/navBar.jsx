import {Link} from 'react-router-dom';
import {IoIosNotifications} from 'react-icons/io';
import Avatar from '../images/avatar.png';

const NavBar = ({title}) => {
  return (
    <nav className="app-header navbar navbar-expand bg-body">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item d-none d-md-block">
            <Link to="/dashboard" className="nav-link fw-700">
              {title}
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto">
          <li
            className="nav-item dropdown"
            style={{
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <IoIosNotifications
              style={{
                color: '#238f53',
                fontSize: '1.2rem',
              }}
            />
          </li>
          <li className="nav-item dropdown user-menu">
            <span className="nav-link">
              <img
                src={Avatar}
                className="user-image rounded-circle shadow"
                alt="User"
                style={{display: 'inline-block'}}
              />
              <span className="d-none d-md-inline fw-600">Field Admin</span>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
