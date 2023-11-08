import MapWrapperProvider from "@/context/MapWrapperContext";
import { render } from "@testing-library/react";
import Marker from "../Marker/Marker";

const MOCK_MARKER_OPTIONS = {
  number: 123,
  position: { lat: -12, lng: -13 },
  title: "mock marker",
  map: jest.fn(),
};

const setupGoogleMapsMock = () => {
  global.window.google = {
    maps: {
      Map: jest.fn(),
      Marker: jest.fn(() => ({ setOptions: jest.fn() })),
    } as any,
  };
};

describe("should test marker component", () => {
  beforeEach(() => setupGoogleMapsMock());
  it("should render component", async () => {
    render(
      <MapWrapperProvider>
        <Marker
          key={MOCK_MARKER_OPTIONS.number}
          position={MOCK_MARKER_OPTIONS.position}
          title={MOCK_MARKER_OPTIONS.title}
        />
      </MapWrapperProvider>
    );
  });
});
