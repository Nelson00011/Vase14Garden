//TODO Google MAP - For Gardens & Zen Tea!.
import { Box } from '@mui/material';
import React, { useState, useRef } from "react";
import {
  GoogleMap,
  Marker,
  Autocomplete,
  useLoadScript,
} from "@react-google-maps/api";

const libraries = ["Rose Garden"];

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194, // San Francisco
};



const Mapping = () => {

    const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [mapCenter, setMapCenter] = useState(center);
  const [markerPosition, setMarkerPosition] = useState(center);

  const autocompleteRef = useRef(null);

  const onLoadAutocomplete = (autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onPlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();

    if (!place.geometry) return;

    const location = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };

    setMapCenter(location);
    setMarkerPosition(location);
  };

  if (!isLoaded) return <div>Loading Map...</div>;
   

    
    return (
            <Box 
            sx={{
                margin: "70px auto",
                padding: "40px 0",
            }} >
        
            GOOGLE MAP HOLDER
        
        </Box>
    )
}

export default Mapping;