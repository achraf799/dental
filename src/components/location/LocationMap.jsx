import GoogleMapReact from 'google-map-react';
import './map.css';
import { LocationPin } from './LocationPin';

export const LocationMap = ({ zoomLevel }) => {
  const location = {
    lat: 35.5535598,
    lng: 5.6085271,
  };

  return (
    <div className="map my-4">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: import.meta.env.VITE_API_KEY }}
          defaultZoom={zoomLevel}
          defaultCenter={location}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text="EXCELLENCE (Centre Dentaire)"
            onClick={() =>
              window.open('https://maps.app.goo.gl/VgSnocZ61FTa4UGB8', '_blank')
            }
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};
