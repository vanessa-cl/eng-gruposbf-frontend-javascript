import { render, screen } from "@testing-library/react";
import ButtonLink from "../ButtonLink";

const MOCK_BUTTON_PROPS = {
  id: "mock-button",
  href: "/*",
  title: "Mock Button",
  label: "Mock Button",
};

describe("should test button component", () => {
  it("should render button", () => {
    render(
      <ButtonLink
        id={MOCK_BUTTON_PROPS.id}
        href={MOCK_BUTTON_PROPS.href}
        title={MOCK_BUTTON_PROPS.title}
        label={MOCK_BUTTON_PROPS.label}
      />
    );

    expect(
      screen.getByRole("link", { name: "Mock Button" })
    ).toBeInTheDocument();
  });
});
