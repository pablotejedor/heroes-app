import React from 'react';
import { HeroCardTeam } from './HeroCardTeam';
export const MyTeam = ({ heroTeam }) => {
  console.log(heroTeam);
  return (
    <>
      <h1>MyTeam</h1>
      <div className="d-flex">
        {heroTeam.map(hero => (
          <HeroCardTeam hero={hero} key={hero.id} />
        ))}
      </div>
    </>
  );
};
