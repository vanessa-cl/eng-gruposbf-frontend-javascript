import { act, render, screen, waitFor } from "@testing-library/react";
import SearchStoresResults from "../SearchStoresResults/SearchStoresResults";
import userEvent from "@testing-library/user-event";

const MOCK_STORES = [
  {
    id: 1,
    name: "NFS Alexania",
    number: 6322,
    latitude: "-16.121590171053200",
    longitude: "-48.39803935435456",
    address: "BR 060- km22 - Zona Rural",
    distance: 10,
  },
  {
    id: 2,
    name: "NCS Araguaia",
    number: 6326,
    latitude: "-16.65827033456880",
    longitude: "-49.25948895007950",
    address: "Rua 44, 399 Setor Central",
    distance: 10,
  },
];

describe("should test search stores results component", () => {
  it("should render search stores results component", () => {
    render(<SearchStoresResults items={MOCK_STORES} />);

    expect(screen.getByLabelText("Lojas encontradas")).toBeInTheDocument();
  });

  it("should show found stores", () => {
    render(<SearchStoresResults items={MOCK_STORES} />);

    MOCK_STORES.forEach((item) => {
      expect(screen.getByLabelText(item.name)).toBeInTheDocument();
    });
  });

  it("should change filter button label", async () => {
    render(<SearchStoresResults items={MOCK_STORES} />);

    const filterButton = screen.getByRole("button", {
      name: "Menor distância",
    });
    await act(async () => {
      userEvent.click(filterButton);
    });

    await waitFor(async () => {
      expect(filterButton).toHaveTextContent("Maior distância");
    });
  });
});
