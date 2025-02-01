import './dasboard.css';
import './adminlte.css';
import InfoBox from '../../components/infoBox';
// import {useEffect, useRef} from 'react';
// import leaflet from 'leaflet';
// import useLocalStorage from '../../components/useLocalStorage';
// import useGeolocation from '../../components/useGeolocation';
import Map from '../../components/Map';
import NavBar from '../../components/navBar';
import Aside from '../../components/aside';
import Select from '../../components/select';

const Dashboard = () => {
  const locationn = [
    {
      id: 1,
      name: 'Abuja',
    },
    {
      id: 2,
      name: 'Jos',
    },
    {
      id: 3,
      name: 'Kaduna',
    },
    {
      id: 4,
      name: 'Lagos',
    },
    {
      id: 5,
      name: 'Ogun',
    },
    {
      id: 6,
      name: 'Osun',
    },
    {
      id: 7,
      name: 'Oyo',
    },
    {
      id: 8,
      name: 'Ekiti',
    },
    {
      id: 9,
      name: 'Ondo',
    },
  ];

  // const mapRef = useRef ();
  // const userMarkerRef = useRef ();

  // const [userPosition, setUserPosition] = useLocalStorage ('USER_MARKER', {
  //   latitude: 0,
  //   longitude: 0,
  // });

  // const [nearbyMarkers, setNearbyMarkers] = useLocalStorage (
  //   'NEARBY_MARKER',
  //   []
  // );

  // const location = useGeolocation ();

  // useEffect (() => {
  //   mapRef.current = leaflet
  //     .map ('map')
  //     .setView ([userPosition.latitude, userPosition.longitude], 13);

  //   leaflet
  //     .tileLayer ('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       maxZoom: 19,
  //       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //     })
  //     .addTo (mapRef.current);

  //   nearbyMarkers.forEach (({latitude, longitude}) => {
  //     leaflet
  //       .marker ([latitude, longitude])
  //       .addTo (mapRef.current)
  //       .bindPopup (`lat: ${latitude}, long: ${longitude}`);
  //   });

  //   mapRef.current.addEventListener ('click', e => {
  //     const {lat: latitude, lng: longitude} = e.latlng;
  //     leaflet
  //       .marker ([latitude, longitude])
  //       .addTo (mapRef.current)
  //       .bindPopup (`lat: ${latitude}, long: ${longitude}`);

  //     console.log (e);
  //   });

  //   return () => mapRef.current.remove ();
  // }, []);

  // useEffect (
  //   () => {
  //     setUserPosition ({...userPosition});

  //     if (userMarkerRef.current) {
  //       mapRef.current.removeLayer (userMarkerRef.current);
  //     }

  //     userMarkerRef.current = leaflet
  //       .marker ([location.latitude, location.longitude])
  //       .addTo (mapRef.current)
  //       .bindPopup ('user');

  //     const el = userMarkerRef.current.getElement ();
  //     if (el) {
  //       el.style.filter = 'hoe-rotate(120deg)';
  //     }
  //     mapRef.current.setView ([location.latitude, location.longitude]);
  //   },
  //   [location, userPosition.latitude, userPosition.longitude]
  // );

  return (
    <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
      <div className="app-wrapper">
        <NavBar title="Dashboard" />
        <Aside />
        {/* <div className="sidebar-wrapper sidebar2__wrapper">
          <div className="primary-color sidebar2__container" />
          <div className="dashboard__list">
            <h6 className="fs_">Realtime flashpoints - 120</h6>
            <h6 className="fs_">Low <span>2</span></h6>
            <h6 className="fs_">Medium</h6>
            <h6 className="fs_">High</h6>
            <h6 className="fs_">Critical</h6>
            <div style={{width: '100px', height: '1px', background: '#fff'}} />
          </div>

        </div> */}
        <main className="app-main">
          <div className="sidebar-wrapper sidebar2__wrapper primary-color">
            <div className="sidebar2__container">
              <div className="dashboard__list">
                <h6 className="fs_">Realtime flashpoints - 120</h6>
                <h6 className="fs_">
                  <span style={{color: '#bbbb14'}}>Low</span> <span>2</span>
                </h6>
                <h6 className="fs_">
                  <span style={{color: '#c0c038'}}>Medium</span> <span>8</span>
                </h6>
                <h6 className="fs_">
                  <span style={{color: '#c05b5b'}}>High</span> <span>2</span>
                </h6>
                <h6 className="fs_">
                  <span style={{color: '#f81010'}}>Critical</span>
                  {' '}
                  <span style={{right: '7%'}}>88</span>
                </h6>
                <div className="hrr" />
              </div>
              <div className="analytics">
                <h6 className="fs_">Analytics</h6>
                <InfoBox
                  text="Total no. of alerts"
                  numb="40"
                  style={{background: 'lightgreen'}}
                />
                <InfoBox
                  text="Total no. of unassigned alerts"
                  numb="474"
                  style={{background: '#bec9be'}}
                />
                <InfoBox
                  text="Total no. of unresolved alerts"
                  numb="40"
                  style={{background: '#e4e405'}}
                />
                <div className="hrr" style={{marginTop: '1rem'}} />
              </div>

              <div className="location">
                <h6 className="fs_">Location with the most Alerts</h6>
                <div className="location_content fs_">
                  {locationn.map (({id, name}) => <div key={id}>{name}</div>)}
                </div>

              </div>

            </div>

          </div>
          <div className="map_wrapper app-content">
            <div className="map_filter">
              <h5 className="fs_">Filter By:</h5>
              <div className="select_container">
                <Select name="State" />
                <Select name="LGA" />
              </div>
            </div>
            <div id="map">
              <Map />
            </div>

          </div>
        </main>
      </div>

    </div>
  );
};

export default Dashboard;
