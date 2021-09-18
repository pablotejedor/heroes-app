import React from 'react';
import { HeroCardTeam } from './HeroCardTeam';
import { getOverallStats } from './helpers/getOverallStats';
import { getAverageHeight } from './helpers/getAverageHeight';
import { getAverageWeight } from './helpers/getAverageWeight';
export const MyTeam = ({ heroTeam, setHeroTeam }) => {
  let overallStats = getOverallStats(heroTeam);
  let averageHeight = getAverageHeight(heroTeam);
  let averageWeight = getAverageWeight(heroTeam);

  return (
    <div className='m-5'>
      <h1>My team</h1>
      <div className="d-flex text-center">
        <div className="m-3">
          <h4>Overall Stats:</h4>
          <div className="d-flex">
            {overallStats.map(stat => (
              <h5 className="m-1">
                {stat.stat}: {stat.value}
              </h5>
            ))}
          </div>
        </div>

        <div className="m-3">
          <h4>Average Appearance:</h4>
          <div className="d-flex">
            <h5 className="m-2">Average Height: {averageHeight || 0} cm</h5>
            <h5 className="m-2">Average Weight: {averageWeight || 0} kg</h5>
          </div>
        </div>
      </div>

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
    </div>
  );
};
