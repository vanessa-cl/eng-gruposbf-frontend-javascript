import MapWrapper from "@/components/Map/MapWrapper";
import { useContext } from "react";
import { MapWrapperContext } from "@/context/MapWrapperContext";
import { MapWrapperContextProps } from "@/types/MapWrapperContextProps";
import MapPageStyle from "@/components/Map/styles/MapPage";

export default function MapPage() {
  const { center, nearestStores } = useContext(
    MapWrapperContext
  ) as MapWrapperContextProps;

  return (
    <MapPageStyle>
      <MapWrapper center={center!} nearestStores={nearestStores!} />
    </MapPageStyle>
  );
}
