import styled from "styled-components";

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  background-color: var(--nike-neutral-100);

  img {
    width: 50px;
    height: 20px;
  }

  div {
    width: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export default HeaderRow;
