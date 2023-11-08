import { createContext, useState } from "react";
import { MapWrapperContextProps } from "@/types/MapWrapperContextProps";
import { ChildrenProps } from "@/types/ChildrenProps";

export const MapWrapperContext = createContext<MapWrapperContextProps | null>(
  null
);

function MapWrapperProvider({ children }: ChildrenProps) {
  const [center, setCenter] = useState<google.maps.LatLngLiteral | null>(null);

  const updateCenter = (props: google.maps.LatLngLiteral | null) => {
    setCenter(props);
  };

  return (
    <MapWrapperContext.Provider value={{ center, updateCenter }}>
      {children}
    </MapWrapperContext.Provider>
  );
}

export default MapWrapperProvider;
