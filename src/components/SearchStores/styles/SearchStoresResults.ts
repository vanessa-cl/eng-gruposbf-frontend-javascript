import styled from "styled-components";
import { SearchStoresMain } from "./SearchStoresContainers";

export const SearchStoresResults = styled(SearchStoresMain)`
  width: 90%;
  background-color: var(--nike-neutral-200);
  border-radius: 8px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  padding: 16px;
  margin: 0px 16px 24px 16px;
`;

export const SearchStoresFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: var(--nike-label-medium);
  color: var(--nike-neutral-700);
  padding: 8px 0px;

  button {
    background: transparent;
    border: none;
    margin-right: 16px;
  }

  div {
    display: flex;
    align-items: center;
  }

  img {
    margin: 0px 8px;
    width: 16px;
    height: 16px;
  }
`;