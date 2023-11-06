import { render, screen } from "@testing-library/react";
import SignUp from "../SignUp";

describe("should test signup component", () => {
  it("should render signup component", () => {
    render(<SignUp />);

    expect(
      screen.getByRole("heading", { name: "Receba as novidades da Nike" })
    ).toBeInTheDocument();
  });
});
