import { icons } from "@/utils/icons";
import SearchStoresItem from "../SearchStoresItem/SearchStoresItem";
import * as S from "../styles/SearchStoresResults";
import Image from "next/image";
import { SearchStoresResultsProps } from "@/types/SearchStoresResultsProps";
import { useState } from "react";

export default function SearchStoresResults({
  nearestStores,
}: SearchStoresResultsProps) {
  const [filterByShortestDistance, setFilterByShortestDistance] =
    useState(true);

  return (
    <S.SearchStoresResults as="section" aria-label="Lojas encontradas">
      <S.SearchStoresFilter>
        <div>
          <button
            id="filter-by-distance-button"
            name="filter-by-distance-button"
            onClick={() =>
              setFilterByShortestDistance(!filterByShortestDistance)
            }
          >
            {filterByShortestDistance ? "Menor distância" : "Maior distância"}
          </button>
          <Image
            src={filterByShortestDistance ? icons.downArrow : icons.upArrow}
            alt="Seta"
          />
        </div>
      </S.SearchStoresFilter>
      <ul>
        {nearestStores.map((item) => {
          return (
            <SearchStoresItem
              key={item.number}
              name={item.name}
              number={item.number}
              adress={item.adress}
              distance={item.distance}
            />
          );
        })}
      </ul>
    </S.SearchStoresResults>
  );
}
