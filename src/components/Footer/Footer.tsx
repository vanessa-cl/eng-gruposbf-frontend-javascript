import Link from "next/link";
import S from "./styles/index";
import AccordionFooter from "../ui/Accordion/AccordionFooter";
import Image from "next/image";
import { logos, payments } from "@/utils/icons";
import { HELP_ACCORDION, ABOUT_NIKE_ACCORDION } from "./FooterData";

export default function Footer() {
  return (
    <S.Footer aria-label="Rodapé">
      <S.FooterSectionLink aria-label="Ver mais">
        <ul>
          <S.FooterLabel as="li">
            <Link href="#!" title="Encontre uma loja Nike">
              Encontre uma loja Nike
            </Link>
          </S.FooterLabel>
          <S.FooterLabel as="li">
            <Link href="#!" title="Cadastre-se para receber novidades">
              Cadastre-se para receber novidades
            </Link>
          </S.FooterLabel>
          <S.FooterLabel as="li">
            <Link href="#!" title="Mapa do site">
              Mapa do site
            </Link>
          </S.FooterLabel>
        </ul>
      </S.FooterSectionLink>
      <hr></hr>
      <S.FooterAccordionLink aria-label="Dúvidas">
        <AccordionFooter
          id={HELP_ACCORDION.id}
          label={HELP_ACCORDION.label}
          items={HELP_ACCORDION.items}
        />
        <AccordionFooter
          id={ABOUT_NIKE_ACCORDION.id}
          label={ABOUT_NIKE_ACCORDION.label}
          items={ABOUT_NIKE_ACCORDION.items}
        />
      </S.FooterAccordionLink>
      <S.FooterSectionLink aria-labelledby="social-media">
        <S.FooterLabel id="social-media">Redes sociais</S.FooterLabel>
        <S.FooterSocialMedia>
          <ul>
            <li>
              <a href="#">
                <Image src={logos.facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={logos.instagram} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={logos.youtube} alt="Youtube" />
              </a>
            </li>
          </ul>
        </S.FooterSocialMedia>
      </S.FooterSectionLink>
      <S.FooterSectionLink aria-labelledby="payment-methods">
        <S.FooterLabel id="payment-methods">Formas de pagamento</S.FooterLabel>
        <S.FooterPaymentMethods>
          <ul>
            {payments.map((item) => {
              return (
                <li key={item.id}>
                  <Image src={item.icon} alt={item.alt} />
                </li>
              );
            })}
          </ul>
        </S.FooterPaymentMethods>
      </S.FooterSectionLink>
      <hr></hr>
      <div>
        <S.FooterAbout aria-label="Sobre">
          <ul>
            <li>
              <a href="#!" title="Brasil">
                Brasil
              </a>
            </li>
            <li>
              <a href="#!" title="Política de Privacidade">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#!" title="Termos de Uso">
                Termos de Uso
              </a>
            </li>
          </ul>
          <div id="copyright">
            <p aria-labelledby="copyright">
              © 2021 Nike. Todos os direitos reservados. Fisia Comércio de
              Produtos Esportivos Ltda - CNPJ: 59.546.515/0016-10 Rua José
              Semião Rodrigues Agostinho, 1370 - Galpão Unidade 17 - Nível 0, 1
              e 2 - CEP 06833-300 - Embu das Artes/SP.
            </p>
          </div>
        </S.FooterAbout>
      </div>
    </S.Footer>
  );
}
