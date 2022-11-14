import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

export const DogsBreedsPage = () => {
  const { id } = useParams();
  const searchBreedUrl = `https://dog.ceo/api/breed/${id}/images`;

  const [selectedBreed, selectedBreedErr, selectedBreedLoading] =
    useFetch(searchBreedUrl);

  if (selectedBreedLoading || !selectedBreed.message)
    return <div> loading </div>;

  if (selectedBreedErr) return <div> error </div>;

  return (
    <main>
      <img src={selectedBreed.message[0]} alt="hello" />
    </main>
  );
};
