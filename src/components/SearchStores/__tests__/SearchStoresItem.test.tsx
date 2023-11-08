import { render, screen, waitFor } from "@testing-library/react";
import SearchStoresItem from "../SearchStoresItem/SearchStoresItem";
import userEvent from "@testing-library/user-event";
import MapWrapperProvider from "@/context/MapWrapperContext";

const MOCK_STORE = {
  name: "NFS Alexania",
  number: 6322,
  latitude: "-16.121590171053200",
  longitude: "-48.39803935435456",
  adress: "BR 060- km22 - Zona Rural",
  distance: 1000,
};

global.scrollTo = jest.fn();

describe("should test search stores item component", () => {
  it("should render search stores item component", () => {
    render(
      <MapWrapperProvider>
        <SearchStoresItem
          number={MOCK_STORE.number}
          name={MOCK_STORE.name}
          latitude={MOCK_STORE.latitude}
          longitude={MOCK_STORE.longitude}
          adress={MOCK_STORE.adress}
          distance={MOCK_STORE.distance}
        />
      </MapWrapperProvider>
    );

    expect(screen.getByText(MOCK_STORE.name)).toBeInTheDocument();
  });

  it("should go to the top of the page", async () => {
    render(
      <MapWrapperProvider>
        <SearchStoresItem
          number={MOCK_STORE.number}
          name={MOCK_STORE.name}
          latitude={MOCK_STORE.latitude}
          longitude={MOCK_STORE.longitude}
          adress={MOCK_STORE.adress}
          distance={MOCK_STORE.distance}
        />
      </MapWrapperProvider>
    );

    const viewMapButton = screen.getByRole("button", {
      name: "Pin Ver no mapa",
    });
    userEvent.click(viewMapButton);
    await waitFor(async () => expect(global.scrollTo).toHaveBeenCalledTimes(1));
  });
});
