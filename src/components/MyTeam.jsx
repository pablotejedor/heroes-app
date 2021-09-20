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
    <>
      <h1 className="mt-5">My team</h1>
      <div className="m-5 d-flex">
        <div className="d-flex text-center flex-column align-items-center">
          <div className="m-1 p-3 border rounded" style={{width: '14rem'}}>
            <h4>Overall Stats:</h4>
            <div className="d-flex flex-column">
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
              <div className="d-flex flex-column">
                <h5 className="m-2 p-1 border rounded bg-secondary">
                  Height: {averageHeight || '-'} cm
                </h5>
                <h5 className="m-2 p-1 border rounded bg-secondary">
                  Weight: {averageWeight || '-'} kg
                </h5>
              </div>
            </div>
        </div>

        {!heroTeam.length ? (
          <p className="text-danger">
            Your team does not contain any hero. Please scroll down and use the
            search feature to seek and get heroes for your team
          </p>
        ) : null}

        <div className="d-flex flex-wrap">
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
    </>
  );
};
