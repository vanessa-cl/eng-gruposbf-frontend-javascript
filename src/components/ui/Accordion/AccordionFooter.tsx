import { useState } from "react";
import { AccordionProps, AccordionItem } from "@/types/AccordionProps";
import S from "./styles/index";
import { icons } from "@/utils/icons";
import Image from "next/image";

export default function AccordionFooter(props: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.Accordion>
      <hr></hr>
      <S.AccordionLabel htmlFor={props.id}>
        <p>{props.label}</p>
        <S.AccordionIcon id={props.id} onClick={() => setIsOpen(!isOpen)}>
          <Image
            src={isOpen ? icons.minus : icons.plus}
            alt={isOpen ? "Menos" : "Mais"}
          ></Image>
        </S.AccordionIcon>
      </S.AccordionLabel>
      <hr></hr>
      <S.AccordionList>
        {isOpen ? (
          props.items?.map((item: AccordionItem) => {
            return (
              <li key={item.id}>
                <S.AccordionItem href={item.href}>{item.label}</S.AccordionItem>
              </li>
            );
          })
        ) : (
          <></>
        )}
      </S.AccordionList>
    </S.Accordion>
  );
}
