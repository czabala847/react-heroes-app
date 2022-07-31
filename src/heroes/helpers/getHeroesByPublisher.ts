import { heroes } from "../data/heroes";
import { Publisher } from "../interfaces/Hero.interface";

export const getHeroesByPublisher = (publisher: Publisher) => {
  return heroes.filter((hero) => hero.publisher === publisher);
};
