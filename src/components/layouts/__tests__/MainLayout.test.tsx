import { render, screen } from "@testing-library/react";
import MainLayout from "../MainLayout";

const MOCK_CHILDREN = () => {
  return <h1>MOCK CHILDREN</h1>;
};

describe("should test main layout component", () => {
  it("should render header and footer", () => {
    render(
      <MainLayout>
        <MOCK_CHILDREN />
      </MainLayout>
    );

    expect(
      screen.getByRole("banner", { name: "Cabeçalho" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("contentinfo", { name: "Rodapé" })
    ).toBeInTheDocument();
  });

  it("should render children component", () => {
    render(
      <MainLayout>
        <MOCK_CHILDREN />
      </MainLayout>
    );

    expect(screen.getByText("MOCK CHILDREN")).toBeInTheDocument();
  });
});
