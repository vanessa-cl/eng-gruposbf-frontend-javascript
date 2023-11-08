import { act, render, screen, waitFor, within } from "@testing-library/react";
import SearchStoresResults from "../SearchStoresResults/SearchStoresResults";
import userEvent from "@testing-library/user-event";
import MapWrapperProvider from "@/context/MapWrapperContext";

export const MOCK_STORES = [
  {
    name: "NFS Alexania",
    number: 6322,
    latitude: "-16.121590171053200",
    longitude: "-48.39803935435456",
    adress: "BR 060- km22 - Zona Rural",
    distance: 17.4,
  },
  {
    name: "NCS Araguaia",
    number: 6326,
    latitude: "-16.65827033456880",
    longitude: "-49.25948895007950",
    adress: "Rua 44, 399 Setor Central",
    distance: 90.5,
  },
];

const MOCK_SORTED_STORES = [
  {
    name: "NCS Araguaia",
    number: 6326,
    latitude: "-16.65827033456880",
    longitude: "-49.25948895007950",
    adress: "Rua 44, 399 Setor Central",
    distance: 68.9,
  },
  {
    name: "NFS Alexania",
    number: 6322,
    latitude: "-16.121590171053200",
    longitude: "-48.39803935435456",
    adress: "BR 060- km22 - Zona Rural",
    distance: 67.4,
  },
];

describe("should test search stores results component", () => {
  it("should render search stores results component", () => {
    render(
      <MapWrapperProvider>
        <SearchStoresResults nearestStores={MOCK_STORES} />
      </MapWrapperProvider>
    );

    expect(screen.getByLabelText("Lojas encontradas")).toBeInTheDocument();
  });

  it("should show found stores", () => {
    render(
      <MapWrapperProvider>
        <SearchStoresResults nearestStores={MOCK_STORES} />
      </MapWrapperProvider>
    );

    MOCK_STORES.forEach((item) => {
      expect(screen.getByLabelText(item.name)).toBeInTheDocument();
    });
  });

  it("should change filter button label", async () => {
    render(
      <MapWrapperProvider>
        <SearchStoresResults nearestStores={MOCK_STORES} />
      </MapWrapperProvider>
    );
    const filterButton = screen.getByRole("button", {
      name: "Menor distância",
    });

    await act(async () => {
      userEvent.click(filterButton);
    });

    await waitFor(async () => {
      expect(filterButton).toHaveTextContent("Maior distância");
      const storesResults = screen.getAllByRole("listitem");
      storesResults.forEach((item, i) => {
        expect(
          screen.getByRole("heading", { name: MOCK_SORTED_STORES[i].name })
        ).toBeInTheDocument();
      });
    });
  });
});
