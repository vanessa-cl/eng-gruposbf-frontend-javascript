export type SearchStoresItemProps = {
  id: number;
  number: number;
  name: string;
  address: string;
  distance: number;
};

export type SearchStoresResultsProps = {
  items: Array<SearchStoresItemProps>
}