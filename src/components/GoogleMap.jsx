import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker';
//import axios from 'axios';

const defaultProps = {
  center: {
    lat: 14.62,
    lng: -90.53,
  },
  zoom: 6,
}

//const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => (
  <div className="googleMaps" style={{ 
    height: '40vh',
    width: '80%',
    margin:'10%',
    borderRadius:'30px !important'
  }}>
  <GoogleMapReact  
  bootstrapURLKeys={{ key: 'AIzaSyBNiuvhZvipOBEKqPHl3zVlFEMzxQawuQA' }}
  defaultCenter={defaultProps.center}
  defaultZoom={defaultProps.zoom}
  >      
  <Marker
  lat={14.6229}
  lng={-90.5315}  
  />
  <Marker
  lat={15.6229}
  lng={-91.5315}  
  />
  <Marker
  lat={15.3229}
  lng={-91.8315}  
  />
  </GoogleMapReact>
  </div>
  )
  
  export default GoogleMap
  