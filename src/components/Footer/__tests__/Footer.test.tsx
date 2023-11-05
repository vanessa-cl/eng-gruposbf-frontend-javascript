import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("should test footer component", () => {
  it("should render footer", () => {
    render(<Footer />);

    expect(screen.getByLabelText("Rodapé")).toBeInTheDocument();
  });
});
