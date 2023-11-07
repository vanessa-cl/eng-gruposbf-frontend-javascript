import { SearchStoresPageProps } from "@/types/SearchStoresPageProps";

export const MOCK_ALL_STORES = [
  {
    name: "NFS Alexania",
    number: 6322,
    latitude: "-16.121590171053200",
    longitude: "-48.39803935435456",
    adress: "BR 060- km22 – Zona Rural",
  },
  {
    name: "NCS Araguaia",
    number: 6326,
    latitude: "-16.65827033456880",
    longitude: "-49.25948895007950",
    adress: "Rua 44, 399 Setor Central",
  },
  {
    name: "NFS Catarina",
    number: 6335,
    latitude: "-23.420399642511900",
    longitude: "-47.16403706665317",
    adress:
      "Rodovia Castelo Branco - KM 60 - Loja 45/46 - Bairro: Dona Catarina",
  },
];

class GeolocationService {
  API_URL = process.env.NEXT_PUBLIC_API_URL! as string;
  NODE_ENV = process.env.NODE_ENV!;

  async getAllStores() {
    return fetch(this.API_URL).then((res) => res.json());
  }
}

export const geolocationService = new GeolocationService();
