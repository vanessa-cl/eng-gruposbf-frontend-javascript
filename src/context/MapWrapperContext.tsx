import { createContext, useState } from "react";
import { MapWrapperContextProps } from "@/types/MapWrapperContextProps";
import { ChildrenProps } from "@/types/ChildrenProps";
import { StoreItem } from "@/types/Store";

export const MapWrapperContext = createContext<MapWrapperContextProps | null>(
  null
);

function MapWrapperProvider({ children }: ChildrenProps) {
  const [center, setCenter] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [nearestStores, setNearestStores] = useState<Array<StoreItem> | null>(
    null
  );

  const updateCenter = (props: { lat: number; lng: number }) => {
    setCenter(props);
  };

  const updateNearestStores = (props: Array<StoreItem>) => {
    setNearestStores(props);
  };

  return (
    <MapWrapperContext.Provider
      value={{ center, updateCenter, nearestStores, updateNearestStores }}
    >
      {children}
    </MapWrapperContext.Provider>
  );
}

export default MapWrapperProvider;
