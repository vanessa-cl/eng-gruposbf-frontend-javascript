import { icons } from "@/utils/icons";
import S from "../../ui/Input/styles/index";
import Image from "next/image";
import { SearchStoresInputProps } from "@/types/SearchStoresInputProps";

export default function SearchStoresInput(props: SearchStoresInputProps) {
  const { searchValue, setSearchValue } = props;

  return (
    <S.InputWrapper $variant="primary" aria-label="Buscar lojas">
      <Image src={icons.glass} alt="Lupa de busca"></Image>
      <S.Input
        $variant="primary"
        id="search-stores-input"
        name="search-stores-input"
        type="text"
        placeholder="Busque por endereço ou CEP"
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
      />
    </S.InputWrapper>
  );
}
