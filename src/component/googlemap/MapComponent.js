import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

function MapComponent() {
  const position = { lat: 53.54992, lng: 10.00678 };

  return (
    <APIProvider apiKey="AIzaSyCO_i-c33VDXRI6755K9sQYPQnB47Ua3YU">
      <Map defaultCenter={position} defaultZoom={10} mapId="99f02df81b66f00a">
        <AdvancedMarker position={position} />
      </Map>
    </APIProvider>
  );
}

export default MapComponent;
