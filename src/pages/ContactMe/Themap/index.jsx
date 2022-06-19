import * as React from 'react';
import {useState} from 'react';
import Map, { Marker, Popup} from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibGluamEiLCJhIjoiY2w0aGZoZmtqMDQxODNiczU4Z2k2djN4NyJ9.ayTcQksOXH4ju1-8URDovw';

// create a map with mapbox free
export default function Themap() {
    const [popupInfo, setPopupInfo] = useState(null);
    const mylocation = {
      longitude : -97.1876687592819,
      latitude :49.783324282305806} 

  return <Map 
      initialViewState={{
        longitude: -97.19,
        latitude: 49.88,
        zoom: 9.5
      }}
      
      mapboxAccessToken = {MAPBOX_TOKEN}
      style={{width: '50%', 
              height: window.innerHeight,
              float:'right',
              borderRadius:'15%',
              padding:'2rem'
            }}
      mapStyle="mapbox://styles/mapbox/navigation-night-v1" 
    >

    {/* create a marker points to "home" */}
    <Marker 
    longitude={mylocation.longitude} 
    latitude={mylocation.latitude} 
    anchor="bottom" color='red'
    onClick={e => {
        e.originalEvent.stopPropagation();
        console.log("marker clicked");
        setPopupInfo(true);
       }}/>

    {/* marker popup setting */}
    {popupInfo && (
      <Popup
        anchor="top"
        style={{backgroundColor:"red"}}
        longitude={mylocation.longitude}
        latitude={mylocation.latitude}
        onClose={() => setPopupInfo(null)}
      >
        <div>
          <h2>Home</h2>
        </div>
      </Popup>
    )}      
  </Map>;
}