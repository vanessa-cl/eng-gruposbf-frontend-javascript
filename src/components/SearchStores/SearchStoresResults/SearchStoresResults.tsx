import { icons } from "@/utils/icons";
import SearchStoresItem from "../SearchStoresItem/SearchStoresItem";
import * as S from "../styles/SearchStoresResults";
import Image from "next/image";
import { SearchStoresResultsProps } from "@/types/SearchStoresItemProps";
import { useState } from "react";

export default function SearchStoresResults({
  items,
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
        {items.map((item) => {
          return (
            <SearchStoresItem
              id={item.id}
              key={item.id}
              name={item.name}
              number={item.number}
              address={item.address}
              distance={item.distance}
            />
          );
        })}
      </ul>
    </S.SearchStoresResults>
  );
}
