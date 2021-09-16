import React, { useState } from 'react';
import { Search } from './Search';
import { MyTeam } from './MyTeam';
export const Home = () => {
  const [heroTeam, setHeroTeam] = useState([]);
  return (
    <>
      <Search setHeroTeam={setHeroTeam} heroTeam={heroTeam} />
      <h1>My team</h1>
      <MyTeam heroTeam={heroTeam} setHeroTeam={setHeroTeam}/>
    </>
  );
};
