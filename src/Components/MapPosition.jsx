import * as React from "react";
import { Map, Marker } from "pigeon-maps";

function MapPosition(props) {
  return (
    <Map height={300} defaultCenter={[props.locationLat, props.locationLng]} defaultZoom={11}>
      <Marker width={50} anchor={[props.locationLat, props.locationLng]} />
    </Map>
  )
}

export default MapPosition;