export type AccordionItem = {
  id: number;
  href: string;
  label: string;
}

export type AccordionProps = {
  id: string;
  label: string;
  items: AccordionItem[];
}
