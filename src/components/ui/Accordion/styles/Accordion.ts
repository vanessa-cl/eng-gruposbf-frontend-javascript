import styled from "styled-components";

const Accordion = styled.div`
  background: transparent;
  color: var(--nike-neutral-100);
  font-weight: normal;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  hr {
    color: var(--nike-neutral-100);
    width: 90%;
  }

  ul {
    margin: 8px 16px 16px 16px;
  }

`;

export default Accordion;
