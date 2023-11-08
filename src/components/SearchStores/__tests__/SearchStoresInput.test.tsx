import { act, render, screen, waitFor } from "@testing-library/react";
import SearchStoresInput from "../SearchStoresInput/SearchStoresInput";
import userEvent from "@testing-library/user-event";
import MapWrapperProvider from "@/context/MapWrapperContext";

const MOCK_INPUT_PROPS = {
  searchValue: "-15.121590171053200,-45.39803935435456",
  setSearchValue: jest.fn(),
};

describe("should test search stores input component", () => {
  it("should render input", () => {
    render(
      <MapWrapperProvider>
        <SearchStoresInput
          searchValue={MOCK_INPUT_PROPS.searchValue}
          setSearchValue={MOCK_INPUT_PROPS.setSearchValue}
        />
      </MapWrapperProvider>
    );

    expect(
      screen.getByPlaceholderText("Busque por endereço ou CEP")
    ).toBeInTheDocument();
  });

  it("should change input value", async () => {
    render(
      <MapWrapperProvider>
        <SearchStoresInput
          searchValue={MOCK_INPUT_PROPS.searchValue}
          setSearchValue={MOCK_INPUT_PROPS.setSearchValue}
        />
      </MapWrapperProvider>
    );

    const input = screen.getByPlaceholderText("Busque por endereço ou CEP");
    await act(async () => {
      userEvent.type(input, "654,321");
    });

    await waitFor(async () =>
      expect(MOCK_INPUT_PROPS.setSearchValue).toHaveBeenCalled()
    );
  });
});
