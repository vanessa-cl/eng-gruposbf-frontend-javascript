import { ReactNode } from "react";
import { StoreItem } from "./Store";

export type MapProps = {
  children: ReactNode;
  center: google.maps.LatLngLiteral;
};

export type MapWrapperProps = {
  userCoordinates: google.maps.LatLngLiteral;
  nearestStores: Array<StoreItem>;
};
