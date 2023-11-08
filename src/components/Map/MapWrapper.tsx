import { MapWrapperProps } from "@/types/MapProps";
import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "./Map";
import Marker from "./Marker/Marker";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

export default function MapWrapper({
  center,
  nearestStores,
}: MapWrapperProps) {
  return (
    <Wrapper apiKey={API_KEY}>
      <Map center={center}>
        {nearestStores.length > 0 ? (
          nearestStores.map((store: any) => {
            let location = {
              lat: Number(store.latitude),
              lng: Number(store.longitude),
            };
            return (
              <Marker
                key={store.number}
                position={location}
                title={store.name}
              />
            );
          })
        ) : (
          <></>
        )}
      </Map>
    </Wrapper>
  );
}
