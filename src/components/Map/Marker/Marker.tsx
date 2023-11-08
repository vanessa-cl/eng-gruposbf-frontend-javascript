import { useState, useEffect } from "react";

export default function Marker(options: google.maps.MarkerOptions) {
  const [marker, setMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    setMarker(new window.google.maps.Marker());
  }, []);

  if (marker!) {
    marker.setOptions({
      position: options.position,
      title: options.title,
      map: options.map
    });
  }

  return null;
}
