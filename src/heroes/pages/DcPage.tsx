import React from "react";
import { HeroList } from "../components";
import { Publisher } from "../interfaces/Hero.interface";

export const DcPage: React.FC = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr />

      <HeroList publisher={Publisher.DC} />
    </>
  );
};
