import styled from "styled-components";

export const SearchStoresMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 40px;
    color: var(--nike-neutral-700);
    font-size: var(--nike-heading-1);
    font-weight: 600;
  }
`;

export const SearchStoresForm = styled(SearchStoresMain)`
  width: 100%;
  padding: 32px 0px;
`;

