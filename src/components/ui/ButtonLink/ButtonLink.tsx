import { ButtonLinkProps } from "@/types/ButtonLinkProps";
import ButtonLinkStyle from "./styles/ButtonLinkStyle";

export default function ButtonLink(props: ButtonLinkProps) {
  return (
    <ButtonLinkStyle id={props.id} href={props.href} title={props.title}>
      {props.label}
    </ButtonLinkStyle>
  );
}
