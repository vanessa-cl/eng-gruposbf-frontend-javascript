import { icons } from "@/utils/icons";
import Image from "next/image";
import * as S from "../styles/SearchStoresItem";
import { StoreItem } from "@/types/Store";
import Link from "next/link";
import { useContext } from "react";
import { MapWrapperContext } from "@/context/MapWrapperContext";
import { MapWrapperContextProps } from "@/types/MapWrapperContextProps";

export default function SearchStoresItem(props: StoreItem) {
  const { updateCenter } = useContext(
    MapWrapperContext
  ) as MapWrapperContextProps;

  const updateMapCenter = () => {
    updateCenter({
      lat: Number(props.latitude),
      lng: Number(props.longitude),
    });
  };

  return (
    <S.SearchStoresItem aria-label={props.name}>
      <S.SearchStoresLabel>
        <div>
          <h2>{props.name}</h2>
          <p>{props.distance.toFixed(1)} km</p>
        </div>
        <Link href="/map" onClick={() => updateMapCenter()}>
          <Image src={icons.pinLink} alt="Pin" />
          Ver no mapa
        </Link>
      </S.SearchStoresLabel>
      <S.SearchStoresData>
        <address>
          {props.name}, {props.adress}
        </address>
        <div>
          <p>Atendimento:</p>
          <p>Segunda a Sábado 10h às 22h | Domingo 11h às 20h</p>
        </div>
        <p className="disponibility">Disponível em 4 dias úteis</p>
      </S.SearchStoresData>
    </S.SearchStoresItem>
  );
}
