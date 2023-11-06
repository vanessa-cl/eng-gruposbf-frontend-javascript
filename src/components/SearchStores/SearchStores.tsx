import Head from "next/head";
import SignUp from "../SignUp/SignUp";
import SearchStoresInput from "./SearchStoresInput/SearchStoresInput";
import * as S from "./styles/SearchStoresContainers";
import SearchStoresResults from "./SearchStoresResults/SearchStoresResults";

export default function SearchStores() {
  return (
    <S.SearchStoresMain>
      <Head>
        <title>Nike | Lojas</title>
        <meta name="description" content="Produtos e Coleções Exclusivas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>Lojas</h1>
      <S.SearchStoresForm as="form">
        <SearchStoresInput />
      </S.SearchStoresForm>
      <SearchStoresResults items={[]} />
      <SignUp />
    </S.SearchStoresMain>
  );
}
