import styled from "styled-components";

const SignUpSection = styled.section`
  background-color: var(--nike-neutral-200);
  color: var(--nike-neutral-700);
  padding: 64px 16px;

  img {
    width: 100px;
    height: 48px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h2 {
    font-weight: 600;
    font-size: var(--nike-heading-2);
    text-transform: uppercase;
  }

  p {
    font-weight: 400;
    margin-top: 8px;
    font-size: var(--nike-paragraph-medium);
    text-align: center;
  }

  a, h2 {
    margin-top: 16px;
  }
`;

export default SignUpSection;
