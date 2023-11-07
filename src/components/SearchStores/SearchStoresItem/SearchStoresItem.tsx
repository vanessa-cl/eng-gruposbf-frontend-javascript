import { icons } from "@/utils/icons";
import Image from "next/image";
import * as S from "../styles/SearchStoresItem";
import { StoreItem } from "@/types/Store";

export default function SearchStoresItem(props: StoreItem) {
  return (
    <S.SearchStoresItem aria-label={props.name}>
      <S.SearchStoresLabel>
        <div>
          <h2>{props.name}</h2>
          <p>{props.distance.toFixed(1)} km</p>
        </div>
        <a href="#">
          <Image src={icons.pinLink} alt="Pin" />
          Ver no mapa
        </a>
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
