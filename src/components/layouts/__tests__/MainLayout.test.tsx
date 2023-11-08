import { render, screen } from "@testing-library/react";
import MainLayout from "../MainLayout";
import MapWrapperProvider from "@/context/MapWrapperContext";

const MOCK_CHILDREN = () => {
  return <h1>MOCK CHILDREN</h1>;
};

describe("should test main layout component", () => {
  it("should render header and footer", () => {
    render(
      <MapWrapperProvider>
        <MainLayout>
          <MOCK_CHILDREN />
        </MainLayout>
      </MapWrapperProvider>
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
      <MapWrapperProvider>
        <MainLayout>
          <MOCK_CHILDREN />
        </MainLayout>
      </MapWrapperProvider>
    );

    expect(screen.getByText("MOCK CHILDREN")).toBeInTheDocument();
  });
});
