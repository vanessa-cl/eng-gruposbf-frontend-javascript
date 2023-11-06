export const MOCK_STORES = [
  {
    id: 1,
    name: "NFS Alexania",
    number: 6322,
    latitude: "-16.121590171053200",
    longitude: "-48.39803935435456",
    address: "BR 060- km22 - Zona Rural",
    distance: 10,
  },
  {
    id: 2,
    name: "NCS Araguaia",
    number: 6326,
    latitude: "-16.65827033456880",
    longitude: "-49.25948895007950",
    address: "Rua 44, 399 Setor Central",
    distance: 10,
  },
];

class GeolocationService {
  API_URL = process.env.NEXT_PUBLIC_API_URL!;
  NODE_ENV = process.env.NODE_ENV!;

  async getAllStores() {
    return fetch(this.API_URL).then((res) => res.json);
  }
}

export const geolocationService = new GeolocationService();
