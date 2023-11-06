import Image from "next/image";
import SignUpSection from "./styles/SignUpSection";
import { logos } from "@/utils/icons";
import ButtonLink from "../ui/Button/ButtonLink";

export default function SignUp() {
  return (
    <SignUpSection aria-label="Novidades da Nike">
      <div>
        <Image src={logos.nike} alt="Nike" />
        <h2>Receba as novidades da Nike</h2>
        <p>
          Cadastre-se e seja um dos primeiros a saber de todas as novidades e
          ofertas.
        </p>
        <ButtonLink
          id="sign-up-button"
          href="#"
          title="Cadastre-se"
          label="Cadastre-se"
        />
      </div>
    </SignUpSection>
  );
}
