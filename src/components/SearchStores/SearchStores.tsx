import Head from "next/head";
import SignUp from "../SignUp/SignUp";
import SearchStoresInput from "./SearchStoresInput/SearchStoresInput";
import * as S from "./styles/SearchStoresContainers";
import SearchStoresResults from "./SearchStoresResults/SearchStoresResults";
import { useState, useEffect } from "react";
import { UserCoordinates } from "@/types/UserCoordinatesProps";

export default function SearchStores() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [userCoordinates, setUserCoordinates] = useState<UserCoordinates>();

  return (
    <S.SearchStoresMain>
      {console.log(searchValue)}
      <Head>
        <title>Nike | Lojas</title>
        <meta name="description" content="Produtos e Coleções Exclusivas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>Lojas</h1>
      <S.SearchStoresForm as="form">
        <SearchStoresInput searchValue={searchValue} setSearchValue={setSearchValue} />
      </S.SearchStoresForm>
      <SearchStoresResults items={[]} />
      <SignUp />
    </S.SearchStoresMain>
  );
}
