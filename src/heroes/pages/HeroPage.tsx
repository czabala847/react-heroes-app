import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { Hero } from "../interfaces/Hero.interface";

export const HeroPage: React.FC = () => {
  const { id } = useParams();

  let hero: Hero | undefined = getHeroById(id!);

  if (!hero) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1>{hero.superhero}</h1>
    </>
  );
};
