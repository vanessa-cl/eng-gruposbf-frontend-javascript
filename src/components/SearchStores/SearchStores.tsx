import Head from "next/head";
import SignUp from "../SignUp/SignUp";
import SearchStoresInput from "./SearchStoresInput/SearchStoresInput";
import * as S from "./styles/SearchStoresContainers";
import SearchStoresResults from "./SearchStoresResults/SearchStoresResults";
import { useState, useEffect, useCallback, useContext } from "react";
import { Coordinates } from "@/types/Coordinates";
import { Store, StoreItem } from "@/types/Store";
import { SearchStoresPageProps } from "@/types/SearchStoresPageProps";
import { MapWrapperContext } from "@/context/MapWrapperContext";
import { MapWrapperContextProps } from "@/types/MapWrapperContextProps";
import MapWrapper from "../Map/MapWrapper";

export default function SearchStores({ allStores }: SearchStoresPageProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [userCoordinates, setUserCoordinates] = useState<Coordinates>();
  const [nearestStores, setNearestStores] = useState<Array<StoreItem>>([]);
  const [overlapMap, setOverlapMap] = useState<boolean>(true);
  const { center } = useContext(MapWrapperContext) as MapWrapperContextProps;

  useEffect(() => {
    if (center) {
      setOverlapMap(true);
    }
  }, [center]);

  const getUserCoordinates = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue !== "") {
      const coordinatesValues = searchValue.split(",");
      setUserCoordinates({
        latitude: Number(coordinatesValues[0]),
        longitude: Number(coordinatesValues[1]),
      });
    }
  };

  const calcDistance = (
    storeCoordinates: Store,
    userCoordinates: Coordinates
  ) => {
    return (
      Math.sqrt(
        Math.pow(
          Number(storeCoordinates.longitude) -
            Number(storeCoordinates.latitude),
          2
        ) + Math.pow(userCoordinates.longitude - userCoordinates.latitude, 2)
      ) * 100
    );
  };

  const getAllDistances = useCallback(
    (allStores: Array<Store>) => {
      if (userCoordinates) {
        const distances = allStores!.map((store) => {
          return {
            ...store,
            distance: calcDistance(store, userCoordinates!),
          };
        });
        const filteredDistances = distances
          .sort((a, b) => (a.distance > b.distance ? 1 : -1))
          .slice(0, 3);
        setNearestStores(filteredDistances);
      }
    },
    [userCoordinates]
  );

  useEffect(() => {
    getAllDistances(allStores);
  }, [allStores, userCoordinates, getAllDistances]);

  return (
    <S.SearchStoresMain>
      <Head>
        <title>Nike | Lojas</title>
        <meta name="description" content="Produtos e Coleções Exclusivas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {center ? (
        <MapWrapper
          center={center!}
          nearestStores={nearestStores}
          overlapMap={overlapMap}
          setOverlapMap={setOverlapMap}
        />
      ) : (
        <></>
      )}
      <h1>Lojas</h1>
      <S.SearchStoresForm
        as="form"
        aria-labelledby="search-stores-input"
        data-testid="form-search-stores"
        onSubmit={(e) => getUserCoordinates(e)}
      >
        <SearchStoresInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </S.SearchStoresForm>
      {nearestStores.length > 0 ? (
        <SearchStoresResults nearestStores={nearestStores!} />
      ) : (
        <></>
      )}
      <SignUp />
    </S.SearchStoresMain>
  );
}
