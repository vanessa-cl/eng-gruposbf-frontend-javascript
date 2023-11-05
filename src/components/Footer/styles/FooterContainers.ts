import styled from "styled-components";

export const FooterSectionLink = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  a {
    text-decoration: none;
    color: var(--nike-neutral-100);
  }
`;

export const FooterAccordionLink = styled.nav`
  margin: 24px 0px;
`;

export const FooterSocialMedia = styled.div`
  ul {
    display: flex;
  }
`;

export const FooterPaymentMethods = styled(FooterSocialMedia)`
  ul {
    flex-wrap: wrap;
    width: 250px;
  }
`;

export const FooterAbout = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 24px 0px;
  }

  a,
  p {
    font-size: var(--nike-paragraph-tiny);
  }

  a {
    text-decoration: none;
    color: var(--nike-neutral-100);
  }

  p {
    color: var(--nike-neutral-300);
    text-align: center;
  }
`;
