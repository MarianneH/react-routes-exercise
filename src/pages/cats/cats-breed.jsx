import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

export const CatsBreedsPage = () => {
  const { id } = useParams();
  const searchBreedUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`;

  const [selectedBreed, selectedBreedErr, selectedBreedLoading] =
    useFetch(searchBreedUrl);

  console.log(selectedBreed);
  if (selectedBreedLoading || !selectedBreed[0]) return <div> loading </div>;
  if (selectedBreedErr) return <div> error </div>;

  return (
    <main>
      <div>
        <img src={selectedBreed[0].url} alt="hello" />
      </div>
    </main>
  );
};
