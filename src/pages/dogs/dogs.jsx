import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function Dogs() {
  const getBreedsUrl = "https://dog.ceo/api/breeds/list/all";
  const [breedsList, breedsListErr, breedsListLoading] = useFetch(getBreedsUrl);
  if (breedsListLoading || !breedsList.message) return <div> loading </div>;
  if (breedsListErr) return <div> error </div>;

  return (
    <>
      <div>hello from dogs</div>
    </>
  );
}
