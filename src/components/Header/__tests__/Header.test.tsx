import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("should test header component", () => {
  it("should render header", () => {
    render(<Header />);

    expect(
      screen.getByText("Fique por dentro dos lançamentos")
    ).toBeInTheDocument();
  });
});
