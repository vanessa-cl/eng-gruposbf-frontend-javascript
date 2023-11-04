import Link from "next/link";
import styled from "styled-components";

const PrimaryButton = styled(Link)`
  background-color: var(--nike-primary);
  color: var(--nike-neutral-100);
  border-radius: 50px;
  cursor: pointer;
  font-size: var(--nike-paragraph-medium);
  font-weight: 700;
  padding: 16px 24px 16px 24px;
  border: none;
  text-decoration: none;
`;

export default PrimaryButton;
