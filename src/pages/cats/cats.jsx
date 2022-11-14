import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function Cats() {
  const url = "https://api.thecatapi.com/v1/breeds";
  const [breedsList, breedsListErr, breedsListLoading] = useFetch(url);
  const navigate = useNavigate();

  if (breedsListLoading || !breedsList[0]) return <div> loading </div>;
  if (breedsListErr) return <div> error </div>;

  return (
    <>
      <div>
        <label htmlFor="cats">Choose a cat:</label>
        <select
          onChange={(e) => navigate(`/cats/${e.target.value}`)}
          name="cats"
          id="cats"
        >
          <option value="cats">-default-</option>
          {breedsList.map((e, i) => (
            <option value={e.id} key={i}>
              {e.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
