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
    <div className="m-5">
      <h1>My team</h1>
      <div className="d-flex text-center">
        <div className="m-3 p-3 border rounded">
          <h4>Overall Stats:</h4>
          <div className="d-flex">
            {overallStats.map(stat => (
              <h5
                className={`m-1 p-2 border rounded ${stat.color}`}
                key={stat.stat}
              >
                {stat.stat}: {stat.value || '-'}
              </h5>
            ))}
          </div>
        </div>

        <div className="m-3 p-3 border rounded">
          <h4>Average Appearance:</h4>
          <div className="d-flex">
            <h5 className="m-2 p-3 border rounded bg-secondary">
              Height: {averageHeight || '-'} cm
            </h5>
            <h5 className="m-2 p-3 border rounded bg-secondary">
              Weight: {averageWeight || '-'} kg
            </h5>
          </div>
        </div>
      </div>

      {!heroTeam.length ? (
        <p className="text-danger">
          Your team will be shown here. At this moment, your team does not contain any hero. Please use the search feature to
          get a hero for your team
        </p>
      ) : null}

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
