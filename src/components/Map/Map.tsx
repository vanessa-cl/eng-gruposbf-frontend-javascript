import React, { useRef, useState, useEffect } from "react";
import { MapProps } from "@/types/MapProps";
import MapContainer from "./styles/MapContainer";

export default function Map({ children, center }: MapProps) {
  const ref = useRef(null);
  const [map, setMap] = useState<google.maps.Map>();

  const mapProps = {
    map,
  };

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  useEffect(() => {
    setMap(
      new window.google.maps.Map(ref.current!, {
        center: center,
        zoom: 14,
      })
    );
  }, [center]);

  return (
    <MapContainer ref={ref} aria-label="Container Mapa">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, mapProps);
        }
      })}
    </MapContainer>
  );
}
