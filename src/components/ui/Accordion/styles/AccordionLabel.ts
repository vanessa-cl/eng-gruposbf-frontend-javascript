import styled from "styled-components";

const AccordionLabel = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
  cursor: pointer;
  font-size: var(--nike-label-medium);

  p {
    text-transform: uppercase;
  }
`;

export default AccordionLabel;