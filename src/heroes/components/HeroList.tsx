import React from "react";

import { HeroCard } from "./HeroCard";

import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { Hero, Publisher } from "../interfaces/Hero.interface";

interface Prop {
  publisher: Publisher;
}

export const HeroList: React.FC<Prop> = ({ publisher }) => {
  const heroes: Hero[] = getHeroesByPublisher(publisher);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};
