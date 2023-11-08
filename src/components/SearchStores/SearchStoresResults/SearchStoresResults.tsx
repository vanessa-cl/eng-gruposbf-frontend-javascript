import { icons } from "@/utils/icons";
import SearchStoresItem from "../SearchStoresItem/SearchStoresItem";
import * as S from "../styles/SearchStoresResults";
import Image from "next/image";
import { SearchStoresResultsProps } from "@/types/SearchStoresResultsProps";
import { useEffect, useState } from "react";
import { StoreItem } from "@/types/Store";

export default function SearchStoresResults({
  nearestStores,
}: SearchStoresResultsProps) {
  const [sortByNearestStores, setSortByNearestStores] = useState<number>(-1);
  const [filteredStores, setFilteredStores] = useState<Array<StoreItem>>([]);

  useEffect(() => {
    setFilteredStores([...nearestStores]);
  }, [nearestStores]);

  useEffect(() => {
    setFilteredStores([
      ...nearestStores.sort((a, b) =>
        a.distance > b.distance ? 1 : sortByNearestStores
      ),
    ]);
  }, [nearestStores, sortByNearestStores]);

  return (
    <S.SearchStoresResults as="section" aria-label="Lojas encontradas">
      <S.SearchStoresFilter>
        <div>
          <button
            id="filter-by-distance-button"
            name="filter-by-distance-button"
            onClick={() =>
              setSortByNearestStores(sortByNearestStores === -1 ? 1 : -1)
            }
          >
            {sortByNearestStores === -1 ? "Menor distância" : "Maior distância"}
          </button>
          <Image
            src={sortByNearestStores === -1 ? icons.downArrow : icons.upArrow}
            alt="Seta"
          />
        </div>
      </S.SearchStoresFilter>
      <ul>
        {filteredStores.length > 0 ? (
          filteredStores.map((item) => {
            return (
              <SearchStoresItem
                key={item.number}
                name={item.name}
                number={item.number}
                latitude={item.latitude}
                longitude={item.longitude}
                adress={item.adress}
                distance={item.distance}
              />
            );
          })
        ) : (
          <></>
        )}
      </ul>
    </S.SearchStoresResults>
  );
}
