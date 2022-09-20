import React, { useContext, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { MarkerF } from '@react-google-maps/api'

import { GoogleMap } from "@react-google-maps/api";
const style = {
    height: `100%`,
    borderRadius: '1em',

};
const defaultMapOptions = {
    disableDefaultUI: true
};
const Map = () => {
    const { isLoaded } = useLoadScript({
        id: "script-loader",
        googleMapsApiKey: "AIzaSyBYo5s0uQPFgc8qafyO0Rzejpe78bi4ezw",
        version: "weekly"
    });

    // -------------------------- JSX
    return isLoaded ? (
        <GoogleMap
            zoom={16}
            center={{ lat: 19.0852306, lng: 72.9075817 }}
            mapContainerStyle={style}
            options={defaultMapOptions}
        >
            <MarkerF position={{ lat: 19.0852306, lng: 72.9075817 }} key={35 + "" + 32} />
        </GoogleMap>
    ) : (
        <h1>Loading...</h1>
    );
};

export default Map;