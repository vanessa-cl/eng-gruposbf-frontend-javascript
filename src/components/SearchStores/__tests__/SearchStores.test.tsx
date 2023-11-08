import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import SearchStores from "../SearchStores";
import { MOCK_ALL_STORES } from "@/services/GeolocationService";
import userEvent from "@testing-library/user-event";
import MapWrapperProvider from "@/context/MapWrapperContext";

const MOCK_EXPECTED_DISTANCES = ["3315.2 km", "3971.3 km", "3997.7 km"];

global.scrollTo = jest.fn();

describe("should test search stores component", () => {
  it("should render search stores component", () => {
    render(
      <MapWrapperProvider>
        <SearchStores allStores={[]} />
      </MapWrapperProvider>
    );

    expect(screen.getByRole("heading", { name: "Lojas" })).toBeInTheDocument();
  });

  it("should render search stores input and signup components", () => {
    render(
      <MapWrapperProvider>
        <SearchStores allStores={MOCK_ALL_STORES} />
      </MapWrapperProvider>
    );

    expect(screen.getByLabelText("Buscar lojas")).toBeInTheDocument();
    expect(screen.getByLabelText("Novidades da Nike")).toBeInTheDocument();
  });

  it("should not render found stores component", async () => {
    render(
      <MapWrapperProvider>
        <SearchStores allStores={MOCK_ALL_STORES} />
      </MapWrapperProvider>
    );

    const input = screen.getByPlaceholderText("Busque por endereço ou CEP");
    expect(input).toHaveValue("");
    await act(async () => fireEvent.submit(input));

    expect(
      screen.queryByLabelText("Lojas encontradas")
    ).not.toBeInTheDocument();
  });

  it("should calculate nearest stores distance by user coordinates", async () => {
    render(
      <MapWrapperProvider>
        <SearchStores allStores={MOCK_ALL_STORES} />
      </MapWrapperProvider>
    );

    const input = screen.getByPlaceholderText("Busque por endereço ou CEP");
    await act(async () => {
      userEvent.type(input, "-23.565398,-46.702320");
    });
    await waitFor(async () =>
      expect(input).toHaveValue("-23.565398,-46.702320")
    );
    await act(async () => fireEvent.submit(input));

    MOCK_ALL_STORES.forEach((item, i) => {
      expect(screen.getByText(MOCK_EXPECTED_DISTANCES[i])).toBeInTheDocument();
    });
  });

  it("should render nearest stores list by user coordinates", async () => {
    render(
      <MapWrapperProvider>
        <SearchStores allStores={MOCK_ALL_STORES} />
      </MapWrapperProvider>
    );

    const input = screen.getByPlaceholderText("Busque por endereço ou CEP");
    await act(async () => {
      userEvent.type(input, "-23.565398,-46.702320");
    });
    await waitFor(async () =>
      expect(input).toHaveValue("-23.565398,-46.702320")
    );
    await act(async () => fireEvent.submit(input));

    MOCK_ALL_STORES.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  it("should render map by selected store", async () => {
    render(
      <MapWrapperProvider>
        <SearchStores allStores={MOCK_ALL_STORES} />
      </MapWrapperProvider>
    );

    const input = screen.getByPlaceholderText("Busque por endereço ou CEP");
    await act(async () => {
      userEvent.type(input, "-23.565398,-46.702320");
    });
    await waitFor(async () =>
      expect(input).toHaveValue("-23.565398,-46.702320")
    );
    await act(async () => fireEvent.submit(input));

    const viewMapButton = screen.getAllByRole("button", {
      name: "Pin Ver no mapa",
    });
    await act(async () => {
      userEvent.click(viewMapButton[0]);
    });
    await waitFor(async () =>
      expect(await screen.findByLabelText("Mapa")).toBeInTheDocument()
    );
  });
});
