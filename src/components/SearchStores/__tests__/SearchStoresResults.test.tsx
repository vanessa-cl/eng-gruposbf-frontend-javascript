import { act, render, screen, waitFor } from "@testing-library/react";
import SearchStoresResults from "../SearchStoresResults/SearchStoresResults";
import userEvent from "@testing-library/user-event";
import { MOCK_STORES } from "@/services/GeolocationService";

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
