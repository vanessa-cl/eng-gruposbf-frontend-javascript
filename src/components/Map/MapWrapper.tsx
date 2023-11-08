import { MapWrapperProps } from "@/types/MapProps";
import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "./Map";
import Marker from "./Marker/Marker";
import { useRouter } from "next/router";
import { useEffect } from "react";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

export default function MapWrapper({
  userCoordinates,
  nearestStores,
}: MapWrapperProps) {
  const router = useRouter();

  useEffect(() => {
    console.log(router);
  }, [router]);

  return (
    <Wrapper apiKey={API_KEY}>
      <Map center={userCoordinates}>
        {nearestStores.map((store: any) => {
          let location = {
            lat: Number(store.latitude),
            lng: Number(store.longitude),
          };
          return (
            <Marker key={store.number} position={location} title={store.name} />
          );
        })}
      </Map>
    </Wrapper>
  );
}
