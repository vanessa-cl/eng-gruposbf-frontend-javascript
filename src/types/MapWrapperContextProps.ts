export type MapWrapperContextProps = {
  center: google.maps.LatLngLiteral | null;
  updateCenter: (props: google.maps.LatLngLiteral | null) => void;
};
