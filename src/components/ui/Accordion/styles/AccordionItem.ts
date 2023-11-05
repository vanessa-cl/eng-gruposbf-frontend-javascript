import styled from "styled-components";
import Link from "next/link";

const AccordionItem = styled(Link)`
  font-weight: normal;
  font-size: var(--nike-paragraph-tiny);
  color: var(--nike-neutral-100);
  text-decoration: none;
  margin-bottom: 8px;
`;

export default AccordionItem;
