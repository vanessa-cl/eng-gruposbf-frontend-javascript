import MapWrapperProvider from "@/context/MapWrapperContext";
import { act, render, screen, waitFor } from "@testing-library/react";
import MapWrapper from "../MapWrapper";
import { MOCK_STORES } from "@/components/SearchStores/__tests__/SearchStoresResults.test";
import userEvent from "@testing-library/user-event";

const MOCK_MAP_WRAPPER_PROPS = {
  center: { lat: -12, lng: -13 },
  nearestStores: MOCK_STORES,
  overlapMap: true,
  setOverlapMap: jest.fn(),
};

describe("should test map wrapper component", () => {
  it("should render component", () => {
    render(
      <MapWrapperProvider>
        <MapWrapper
          center={MOCK_MAP_WRAPPER_PROPS.center}
          nearestStores={MOCK_MAP_WRAPPER_PROPS.nearestStores}
          overlapMap={MOCK_MAP_WRAPPER_PROPS.overlapMap}
          setOverlapMap={MOCK_MAP_WRAPPER_PROPS.setOverlapMap}
        />
      </MapWrapperProvider>
    );

    expect(screen.getByLabelText("Mapa")).toBeInTheDocument();
    expect(screen.getByTestId("map-wrapper")).toBeInTheDocument();
  });

  it("should hide map wrapper component", async () => {
    render(
      <MapWrapperProvider>
        <MapWrapper
          center={null}
          nearestStores={MOCK_MAP_WRAPPER_PROPS.nearestStores}
          overlapMap={false}
          setOverlapMap={MOCK_MAP_WRAPPER_PROPS.setOverlapMap}
        />
      </MapWrapperProvider>
    );
    const mapWrapper = screen.getByLabelText("Mapa");
    const backButton = screen.getByRole("button", { name: "Voltar" });
    await act(async () => userEvent.click(backButton));

    await waitFor(async () => expect(mapWrapper).not.toHaveClass("overlap"));
  });

  it("should show map wrapper component", async () => {
    render(
      <MapWrapperProvider>
        <MapWrapper
          center={MOCK_MAP_WRAPPER_PROPS.center}
          nearestStores={MOCK_MAP_WRAPPER_PROPS.nearestStores}
          overlapMap={MOCK_MAP_WRAPPER_PROPS.overlapMap}
          setOverlapMap={MOCK_MAP_WRAPPER_PROPS.setOverlapMap}
        />
      </MapWrapperProvider>
    );

    const mapWrapper = screen.getByLabelText("Mapa");
    expect(mapWrapper).toHaveClass("overlap");
  });

  it("should not render map wrapper", async () => {
    render(
      <MapWrapperProvider>
        <MapWrapper
          center={MOCK_MAP_WRAPPER_PROPS.center}
          nearestStores={[]}
          overlapMap={MOCK_MAP_WRAPPER_PROPS.overlapMap}
          setOverlapMap={MOCK_MAP_WRAPPER_PROPS.setOverlapMap}
        />
      </MapWrapperProvider>
    );

    expect(screen.getByTestId("map-wrapper")).toBeEmptyDOMElement();
  });
});
