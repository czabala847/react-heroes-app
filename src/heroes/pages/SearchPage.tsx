import React, { ChangeEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { parse } from "query-string";

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { Hero } from "../interfaces/Hero.interface";
import { getHeroesByName } from "../helpers/getHeroesByName";

interface Form {
  searchText: string;
}

export const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = parse(location.search);
  const heroes: Hero[] = getHeroesByName(q as string);

  const { searchText, changeValueInput } = useForm<Form>({
    searchText: q as string,
  });

  const onSearchSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`?q=${searchText.trim().toLocaleLowerCase()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form autoComplete="off" onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={changeValueInput}
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" ? (
            <div className="alert alert-primary">Search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
            )
          )}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  );
};
