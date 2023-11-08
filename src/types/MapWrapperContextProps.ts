import { StoreItem } from "./Store";

export type MapWrapperContextProps = {
  center: { lat: number; lng: number } | null;
  updateCenter: (props: { lat: number; lng: number }) => void;
  nearestStores: Array<StoreItem> | null;
  updateNearestStores: (props: Array<StoreItem>) => void;
};
