import SearchStores from "@/components/SearchStores/SearchStores";
import { geolocationService } from "@/services/GeolocationService";
import { SearchStoresPageProps } from "@/types/SearchStoresPageProps";

export default function Home({ allStores }: SearchStoresPageProps) {
  return (
    <>
      <SearchStores allStores={allStores} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const allStores = await geolocationService.getAllStores();
    return {
      props: {
        allStores: allStores,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {},
    };
  }
}
