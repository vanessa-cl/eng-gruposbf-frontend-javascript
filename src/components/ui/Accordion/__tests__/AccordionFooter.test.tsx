import { screen, render, act } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import AccordionFooter from "../AccordionFooter";

const MOCK_ACCORDION_PROPS = {
  id: "about-nike-accordion",
  label: "Sobre a Nike",
  items: [
    { id: 1, value: "Feito para jogar", href: "#", label: "Feito para jogar" },
    {
      id: 2,
      value: "Sustentabilidade",
      href: "#",
      label: "Sustentabilidade",
    },
  ],
};

describe("should test accordion component", () => {
  it("should render component", () => {
    render(
      <AccordionFooter
        id={MOCK_ACCORDION_PROPS.id}
        label={MOCK_ACCORDION_PROPS.label}
        items={MOCK_ACCORDION_PROPS.items}
      />
    );

    expect(
      screen.getByLabelText(MOCK_ACCORDION_PROPS.label)
    ).toBeInTheDocument();
  });

  it("should render accordion items", async () => {
    render(
      <AccordionFooter
        id={MOCK_ACCORDION_PROPS.id}
        label={MOCK_ACCORDION_PROPS.label}
        items={MOCK_ACCORDION_PROPS.items}
      />
    );

    const accordionButton = screen.getByRole("button", {
      name: MOCK_ACCORDION_PROPS.label,
    });
    await act(async () => userEvent.click(accordionButton));

    MOCK_ACCORDION_PROPS.items.forEach((item) => {
      expect(
        screen.getByRole("link", { name: item.label })
      ).toBeInTheDocument();
    });
  });

  it("should change button icon", async () => {
    render(
      <AccordionFooter
        id={MOCK_ACCORDION_PROPS.id}
        label={MOCK_ACCORDION_PROPS.label}
        items={MOCK_ACCORDION_PROPS.items}
      />
    );

    // refatorar ao inserir os icons
    const accordionButton = screen.getByText("+");
    await act(async () => userEvent.click(accordionButton));
    expect(screen.getByText("-")).toBeInTheDocument();
  });
});
