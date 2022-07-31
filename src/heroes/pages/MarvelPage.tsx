import React from "react";
import { HeroList } from "../components";
import { Publisher } from "../interfaces/Hero.interface";

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />

      <HeroList publisher={Publisher.MARVEL} />
    </>
  );
};
