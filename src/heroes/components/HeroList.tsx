import React from "react";

import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { Hero, Publisher } from "../interfaces/Hero.interface";

interface Prop {
  publisher: Publisher;
}

export const HeroList: React.FC<Prop> = ({ publisher }) => {
  const heroes: Hero[] = getHeroesByPublisher(publisher);

  return (
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}>{hero.superhero}</li>
      ))}
    </ul>
  );
};
