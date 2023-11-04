import S from "../../ui/Input/styles/index";

export default function SearchStoresInput() {
  return (
    <S.InputWrapper $variant="primary">
      <div id="icon"></div>
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
