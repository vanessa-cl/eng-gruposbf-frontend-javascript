import { icons } from "@/utils/icons";
import S from "../../ui/Input/styles/index";
import Image from "next/image";

export default function SearchStoresInput() {
  return (
    <S.InputWrapper $variant="primary">
      <Image src={icons.glass} alt="Lupa de busca"></Image>
      <S.Input
        $variant="primary"
        id="search-stores-input"
        name="search-stores-input"
        type="text"
        placeholder="Busque por endereço ou CEP"
      />
    </S.InputWrapper>
  );
}
