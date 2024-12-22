import { FiMapPin } from 'react-icons/fi';
import './map.css';

export const LocationPin = ({ text, onClick }) => (
  <div className="pin" onClick={onClick}>
    <FiMapPin />
    <p className="pin-text">{text}</p>
  </div>
);
