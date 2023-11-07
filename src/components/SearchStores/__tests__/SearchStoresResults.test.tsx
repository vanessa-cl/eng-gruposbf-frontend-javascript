import { act, render, screen, waitFor } from "@testing-library/react";
import SearchStoresResults from "../SearchStoresResults/SearchStoresResults";
import userEvent from "@testing-library/user-event";

export const MOCK_STORES = [
  {
    name: "NFS Alexania",
    number: 6322,
    adress: "BR 060- km22 - Zona Rural",
    distance: 10,
  },
  {
    name: "NCS Araguaia",
    number: 6326,
    adress: "Rua 44, 399 Setor Central",
    distance: 10,
  },
];

describe("should test search stores results component", () => {
  it("should render search stores results component", () => {
    render(<SearchStoresResults nearestStores={MOCK_STORES} />);

    expect(screen.getByLabelText("Lojas encontradas")).toBeInTheDocument();
  });

  it("should show found stores", () => {
    render(<SearchStoresResults nearestStores={MOCK_STORES} />);

    MOCK_STORES.forEach((item) => {
      expect(screen.getByLabelText(item.name)).toBeInTheDocument();
    });
  });

  it("should change filter button label", async () => {
    render(<SearchStoresResults nearestStores={MOCK_STORES} />);

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
