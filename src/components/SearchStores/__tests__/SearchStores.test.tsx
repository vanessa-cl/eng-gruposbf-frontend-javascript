import { render, screen } from "@testing-library/react";
import SearchStores from "../SearchStores";

describe("should test search stores component", () => {
  it("should render search stores component", () => {
    render(<SearchStores />);

    expect(screen.getByRole("heading", { name: "Lojas" })).toBeInTheDocument();
  });

  it("should render search stores input and signup components", () => {
    render(<SearchStores />);

    expect(screen.getByLabelText("Buscar lojas")).toBeInTheDocument();
    expect(screen.getByLabelText("Lojas encontradas")).toBeInTheDocument();
    expect(screen.getByLabelText("Novidades da Nike")).toBeInTheDocument();
  });
});
