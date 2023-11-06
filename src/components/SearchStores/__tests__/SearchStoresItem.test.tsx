import { render, screen } from "@testing-library/react";
import SearchStoresItem from "../SearchStoresItem/SearchStoresItem";

const MOCK_STORE = {
  id: 1,
  name: "NFS Alexania",
  number: 6322,
  address: "BR 060- km22 - Zona Rural",
  distance: 10,
};

describe("should test search stores item component", () => {
  it("should render search stores item component", () => {
    render(
      <SearchStoresItem
        id={MOCK_STORE.id}
        number={MOCK_STORE.number}
        name={MOCK_STORE.name}
        distance={MOCK_STORE.distance}
        address={MOCK_STORE.address}
      />
    );

    expect(screen.getByText(MOCK_STORE.name)).toBeInTheDocument();
  });
});
