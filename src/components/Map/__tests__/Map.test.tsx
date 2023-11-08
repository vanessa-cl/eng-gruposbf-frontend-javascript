import MapWrapperProvider from "@/context/MapWrapperContext";
import { render, screen } from "@testing-library/react";
import Map from "../Map";

const MOCK_CENTER = { lat: -12, lng: -13 };

const MOCK_MAP_CHILDREN = () => {
  return <h1>MOCK MAP CHILDREN</h1>;
};

const setupGoogleMapsMock = () => {
  global.window.google = {
    maps: {
      Map: jest.fn(),
    } as any,
  };
};

describe("should test map component", () => {
  beforeEach(() => setupGoogleMapsMock());
  it("should render component", () => {
    render(
      <MapWrapperProvider>
        <Map center={MOCK_CENTER}>
          <MOCK_MAP_CHILDREN />
        </Map>
      </MapWrapperProvider>
    );

    expect(screen.getByLabelText("Container Mapa")).toBeInTheDocument();
  });
});
