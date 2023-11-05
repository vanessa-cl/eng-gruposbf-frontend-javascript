import styled from "styled-components";

const Accordion = styled.div`
  background: transparent;
  color: var(--nike-neutral-100);
  font-weight: normal;
  font-size: var(--nike-label-medium);
  padding: 16px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 80%;

  hr {
    color: var(--nike-neutral-100);
    width: 90%;
  }

`;

export default Accordion;
