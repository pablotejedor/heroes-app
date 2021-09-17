import React from 'react';
import { HeroCardTeam } from './HeroCardTeam';
import { getAccumulatedStats } from './helpers/getAccumulatedStats';
export const MyTeam = ({ heroTeam, setHeroTeam }) => {
  console.log(getAccumulatedStats(heroTeam));
  return (
    <div className="d-flex">
      {heroTeam.map(hero => (
        <HeroCardTeam
          hero={hero}
          heroTeam={heroTeam}
          setHeroTeam={setHeroTeam}
          key={hero.id}
        />
      ))}
    </div>
  );
};
