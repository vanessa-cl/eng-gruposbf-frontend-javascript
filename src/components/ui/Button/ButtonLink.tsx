import { PrimaryButtonProps } from "@/types/PrimaryButtonProps";
import PrimaryButton from "./styles/PrimaryButton";

export default function ButtonLink(props: PrimaryButtonProps) {
  return (
    <PrimaryButton id={props.id} href={props.href} title={props.title}>
      {props.label}
    </PrimaryButton>
  );
}
