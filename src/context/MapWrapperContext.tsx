import { MapWrapperProps } from "@/types/MapProps";
import { createContext, useState } from "react";
import { MapWrapperContextProps } from "@/types/MapWrapperContextProps";
import { ChildrenProps } from "@/types/ChildrenProps";

export const MapWrapperContext = createContext<MapWrapperContextProps | null>(
  null
);

function MapWrapperProvider({ children }: ChildrenProps) {
  const [mapWrapperProps, setMapWrapperProps] =
    useState<MapWrapperProps | null>(null);

  const updateMapWrapperProps = (props: MapWrapperProps) => {
    setMapWrapperProps(props);
  };

  return (
    <MapWrapperContext.Provider
      value={{ mapWrapperProps, updateMapWrapperProps }}
    >
      {children}
    </MapWrapperContext.Provider>
  );
}

export default MapWrapperProvider;
