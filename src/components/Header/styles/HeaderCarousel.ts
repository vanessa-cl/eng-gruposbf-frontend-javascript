import styled from "styled-components";

const HeaderCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: var(--nike-neutral-200);
  font-size: var(--nike-paragraph-tiny);
  color: var(--nike-neutral-700);

  div,
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    width: 24px;
    height: 24px;
    background-color: var(--nike-neutral-100);
    border-radius: 50px;
    border: none;

    img {
      width: 12px;
      height: 12px;
    }
  }

  div {
    flex-direction: column;
  }

  img {
    width: 24px;
    height: 24px;
  }

  a {
    color: var(--nike-neutral-700);
  }
`;

export default HeaderCarousel;
