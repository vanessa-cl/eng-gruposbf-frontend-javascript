import AccordionFooter from "@/components/ui/Accordion/AccordionFooter";
import Head from "next/head";

const MOCK_ACCORDION_PROPS = {
  id: "help-accordion",
  label: "Ajuda",
  items: [
    { id: 1, value: "Dúvidas Gerais", href: "#", label: "Dúvidas Gerais" },
    {
      id: 2,
      value: "Encontre seu tamanho",
      href: "#",
      label: "Encontre seu tamanho",
    },
  ],
};

const MOCK_ACCORDION_PROPS_2 = {
  id: "about-nike-accordion",
  label: "Sobre a Nike",
  items: [
    { id: 1, value: "Feito para jogar", href: "#", label: "Feito para jogar" },
    {
      id: 2,
      value: "Sustentabilidade",
      href: "#",
      label: "Sustentabilidade",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Nike</title>
        <meta name="description" content="Produtos e Coleções Exclusivas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <AccordionFooter
        id={MOCK_ACCORDION_PROPS.id}
        label={MOCK_ACCORDION_PROPS.label}
        items={MOCK_ACCORDION_PROPS.items}
      />
      <AccordionFooter
        id={MOCK_ACCORDION_PROPS_2.id}
        label={MOCK_ACCORDION_PROPS_2.label}
        items={MOCK_ACCORDION_PROPS_2.items}
      />
    </>
  );
}
