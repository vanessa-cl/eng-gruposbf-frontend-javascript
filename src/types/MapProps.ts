import { ReactNode } from "react";
import { StoreItem } from "./Store";

export type MapProps = {
  children: ReactNode;
  center: google.maps.LatLngLiteral;
};

export type MapWrapperProps = {
  center: google.maps.LatLngLiteral;
  nearestStores: Array<StoreItem>;
};
