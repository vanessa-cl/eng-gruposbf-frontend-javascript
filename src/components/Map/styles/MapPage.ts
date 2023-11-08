import styled from "styled-components";

const MapPageStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--nike-neutral-300);
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  position: absolute;

  header {
    background-color: var(--nike-neutral-100);
  }

  button {
    margin: 8px;
    font-size: var(--nike-paragraph-medium);
    border: none;
    background: transparent;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default MapPageStyle;
