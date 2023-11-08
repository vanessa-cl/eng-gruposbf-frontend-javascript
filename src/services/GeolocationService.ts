export const MOCK_ALL_STORES = [
  {
    name: "NCS Light",
    number: 6314,
    latitude: "-23.54635675193150",
    longitude: "-46.63906668860330",
    adress: "Rua Coronel Xavier de Toledo, 23, Ljs 23 a 27 e 42, Centro",
  },
  {
    name: "NFS Osasco",
    number: 6309,
    latitude: "-23.5378982063025",
    longitude: "-46.7677134290867",
    adress: "Av. dos Autonomistas, 1542, Lj AR06, Vila Yara",
  },
  {
    name: "NFS São Bernardo",
    number: 6305,
    latitude: "-23.66890903708250",
    longitude: "-46.57509724627120",
    adress: "Rua Garcia Lorca, 301, Lj 40 - Paulicéia",
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
