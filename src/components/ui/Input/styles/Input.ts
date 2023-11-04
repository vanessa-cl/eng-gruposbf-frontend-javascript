import styled from "styled-components";

const Input = styled.input<{$variant: "primary" | "secondary"}>`
  background: ${($props) =>
    $props.$variant === "primary"
      ? "var(--nike-neutral-100)"
      : "var(--nike-neutral-200)"};
  width: 80%;
  border: medium;
  font-size: ${($props) =>
    $props.$variant === "primary"
      ? "var(--nike-paragraph-medium)"
      : "var(--nike-label-medium)"};
  color: var(--nike-neutral-500);

  &:focus {
    outline: none;
  }
`;

export default Input;
