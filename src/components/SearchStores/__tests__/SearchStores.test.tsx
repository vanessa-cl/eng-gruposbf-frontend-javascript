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

const MOCK_EXPECTED_DISTANCES = ["3315.2 km", "3971.3 km", "3997.7 km"];

describe("should test search stores component", () => {
  it("should render search stores component", () => {
    render(<SearchStores allStores={[]} />);

    expect(screen.getByRole("heading", { name: "Lojas" })).toBeInTheDocument();
  });

  it("should render search stores input and signup components", () => {
    render(<SearchStores allStores={MOCK_ALL_STORES} />);

    expect(screen.getByLabelText("Buscar lojas")).toBeInTheDocument();
    expect(screen.getByLabelText("Novidades da Nike")).toBeInTheDocument();
  });

  it("should not render found stores component", async () => {
    render(<SearchStores allStores={MOCK_ALL_STORES} />);

    const input = screen.getByPlaceholderText("Busque por endereço ou CEP");
    expect(input).toHaveValue("");
    await act(async () => fireEvent.submit(input));

    expect(
      screen.queryByLabelText("Lojas encontradas")
    ).not.toBeInTheDocument();
  });

  it("should calculate nearest stores distance by user coordinates", async () => {
    render(<SearchStores allStores={MOCK_ALL_STORES} />);

    const input = screen.getByPlaceholderText("Busque por endereço ou CEP");
    await act(async () => {
      userEvent.type(input, "-23.565398,-46.702320");
    });
    await waitFor(async () =>
      expect(input).toHaveValue("-23.565398,-46.702320")
    );
    await act(async () => fireEvent.submit(input));

    expect(
      await screen.findByText(MOCK_EXPECTED_DISTANCES[0])
    ).toBeInTheDocument();
    expect(
      await screen.findByText(MOCK_EXPECTED_DISTANCES[1])
    ).toBeInTheDocument();
    expect(
      await screen.findByText(MOCK_EXPECTED_DISTANCES[2])
    ).toBeInTheDocument();
  });

  it("should render nearest stores list by user coordinates", async () => {
    render(<SearchStores allStores={MOCK_ALL_STORES} />);

    const input = screen.getByPlaceholderText("Busque por endereço ou CEP");
    await act(async () => {
      userEvent.type(input, "-23.565398,-46.702320");
    });
    await waitFor(async () =>
      expect(input).toHaveValue("-23.565398,-46.702320")
    );
    await act(async () => fireEvent.submit(input));

    MOCK_ALL_STORES.forEach(async (item) => {
      expect(await screen.findByText(item.name)).toBeInTheDocument();
    });
  });
});
