import styled from "styled-components";

const InputWrapper = styled.div<{ $variant: "primary" | "secondary" }>`
  width: 90%;
  padding: 3px 0;
  border-radius: 30px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${($props) =>
    $props.$variant === "primary"
      ? "var(--nike-neutral-100)"
      : "var(--nike-neutral-200)"};
  border: 2px solid
    ${($props) =>
      $props.$variant === "primary"
        ? "var(--nike-neutral-300)"
        : "var(--nike-neutral-200)"};

  div {
    display: flex;
    justify-content: center;
    margin-left: 10px;
    width: 30px;
  }
`;

export default InputWrapper;
