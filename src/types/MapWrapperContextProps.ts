import { MapWrapperProps } from "./MapProps";

export type MapWrapperContextProps = {
  mapWrapperProps: MapWrapperProps | null;
  updateMapWrapperProps: (props: MapWrapperProps) => void;
};
