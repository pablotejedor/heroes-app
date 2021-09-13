import React from 'react';
import { HeroCardTeam } from './HeroCardTeam';
export const MyTeam = ({ heroTeam }) => {
  console.log(heroTeam);
  return (
    <div>
      <h1>MyTeam</h1>
      {heroTeam.map(hero => (
        <HeroCardTeam hero={hero} key={hero.id} />
      ))}
    </div>
  );
};
