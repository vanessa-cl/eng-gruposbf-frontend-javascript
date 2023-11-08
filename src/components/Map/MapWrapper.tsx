import { MapWrapperProps } from "@/types/MapProps";
import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "./Map";
import Marker from "./Marker/Marker";
import MapPageStyle from "./styles/MapPage";
import { useContext } from "react";
import { MapWrapperContext } from "@/context/MapWrapperContext";
import { MapWrapperContextProps } from "@/types/MapWrapperContextProps";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

export default function MapWrapper({
  center,
  nearestStores,
  overlapMap,
  setOverlapMap,
}: MapWrapperProps) {
  const { updateCenter } = useContext(
    MapWrapperContext
  ) as MapWrapperContextProps;

  const updateView = () => {
    updateCenter(null);
    setOverlapMap(!overlapMap);
  };

  return (
    <MapPageStyle className={overlapMap ? "overlap" : ""} aria-label="Mapa">
      <header>
        <button
          id="back-button"
          name="back-button"
          onClick={() => updateView()}
        >
          Voltar
        </button>
      </header>
      <Wrapper apiKey={API_KEY}>
        <Map center={center!} data-testid="map-wrapper">
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
    </MapPageStyle>
  );
}
