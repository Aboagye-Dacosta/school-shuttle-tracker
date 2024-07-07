// import { APIProvider, Map } from "@vis.gl/react-google-maps";

// // const center = {
// //   lat: 6.9271,
// //   lng: 79.8612,
// // };

// export default function MyMap() {
//   // const { isLoaded } = useJsApiLoader({
//   //   id: "google_bustrucker_id",
//   //   googleMapsApiKey: ,
//   // });
//   const API_KEY = import.meta.env.VITE_API_KEY;
//   console.log(API_KEY);
//   return (
//     <>
//       <APIProvider apiKey={API_KEY} >
//         <Map
//           style={{ width: "100%", height: "100vh" }}
//           defaultCenter={{ lat: 22.54992, lng: 0 }}
//           defaultZoom={3}
//           gestureHandling={"greedy"}
//           disableDefaultUI={true}
//         />
//       </APIProvider>
//     </>
//   );
// }

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const center = {
  lat: 6.9271,
  lng: 79.8612,
};

function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  });
  return isLoaded ? (
    <>
      <GoogleMap
        center={center}
        zoom={8}
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      ></GoogleMap>
    </>
  ) : (
    <></>
  );
}
export default MyMap;
