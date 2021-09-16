import React from 'react';
import { HeroCardTeam } from './HeroCardTeam';
export const MyTeam = ({ heroTeam, setHeroTeam }) => {
  return (
    <div className="d-flex">
      {heroTeam.map(hero => (
        <HeroCardTeam hero={hero} heroTeam={heroTeam} setHeroTeam={setHeroTeam} key={hero.id} />
      ))}
    </div>
  );
};
