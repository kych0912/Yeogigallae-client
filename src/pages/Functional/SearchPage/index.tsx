import SearchPage from "../../SearchPage";

export default function Overview({
}: {
  onPlaceSelect: (placeName: string) => void;
}) {
  return (
    <>
      <SearchPage />
    </>
  );
}