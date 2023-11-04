import { render, screen } from "@testing-library/react";
import SearchStoresInput from "../SearchStoresInput/SearchStoresInput";

describe("should test search stores input component", () => {
  it("should render input", () => {
    render(<SearchStoresInput />);

    expect(
      screen.getByPlaceholderText("Busque por endereço ou CEP")
    ).toBeInTheDocument();
  });
});
