import MapWrapper from "@/components/Map/MapWrapper";
import { useContext } from "react";
import { MapWrapperContext } from "@/context/MapWrapperContext";
import { MapWrapperContextProps } from "@/types/MapWrapperContextProps";

export default function MapPage() {
  const { mapWrapperProps } = useContext(
    MapWrapperContext
  ) as MapWrapperContextProps;

  return (
    <MapWrapper
      userCoordinates={mapWrapperProps?.userCoordinates!}
      nearestStores={mapWrapperProps?.nearestStores!}
    />
  );
}