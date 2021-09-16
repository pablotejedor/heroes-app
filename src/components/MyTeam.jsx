import React from 'react';
import { HeroCardTeam } from './HeroCardTeam';
export const MyTeam = ({ heroTeam }) => {
  return (
    <div className="d-flex mx-5">
      {heroTeam.map(hero => (
        <HeroCardTeam hero={hero} key={hero.id} />
      ))}
    </div>
  );
};
