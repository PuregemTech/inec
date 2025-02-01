import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const markers = [
    {position: [9.0729, 7.4881], popupText: 'Abuja'},
    {position: [9.9353, 8.8942], popupText: 'Jos'},
    {position: [8.9000, 10.3667], popupText: 'Taraba'},
    {position: [7.8020, 6.7372], popupText: 'Kogi'},
    {position: [8.4953, 8.5153], popupText: 'Nasarawa(Lafia)'},
  ];

  const createCustomIcon = number => {
    return L.divIcon ({
      className: 'custom-icon',
      html: `<div>${number}</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });
  };

  return (
    <MapContainer
      center={[8.6753, 8.6753]}
      zoom={13}
      style={{height: '100%', maxHeight: '520px', width: '100%'}}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {markers.map ((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          icon={createCustomIcon (index + 1)}
        >
          <Popup>{marker.popupText}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
