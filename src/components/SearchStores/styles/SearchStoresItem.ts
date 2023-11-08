import styled from "styled-components";

export const SearchStoresItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  line-height: 150%;
`;

export const SearchStoresLabel = styled.div`
  margin-bottom: 16px;

  h2 {
    font-size: var(--nike-heading-store);
  }

  p {
    font-size: var(--nike-heading-2);
    font-weight: 600;
  }

  div, 
  button {
    display: flex;
    flex-direction: row;
    color: var(--nike-neutral-700);
  }

  div {
    justify-content: space-between;
    align-items: baseline;
  }

  img {
    margin-right: 8px;
  }

  button {
    margin-top: 8px;
    line-height: 150%;
    font-size: var(--nike-paragraph-medium);
    border: none;
    background: transparent;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const SearchStoresData = styled.div`
  padding: 24px;
  background-color: var(--nike-neutral-100);
  border-radius: 8px;
  color: var(--nike-neutral-500);

  address,
  div {
    line-height: 150%;
  }

  .disponibility,
  div {
    margin-top: 8px;
  }

  div {
    font-size: var(--nike-paragraph-tiny);
  }

  address {
    font-style: normal;
    font-size: var(--nike-label-medium);
  }

  .disponibility {
    color: var(--centauro-success-300);
    font-size: var(--nike-paragraph-tiny);
    font-weight: 700;
  }
`;
