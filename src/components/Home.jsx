import React, { useState } from 'react';
import { Search } from './Search';
import { MyTeam } from './MyTeam';
export const Home = () => {
  const [heroTeam, setHeroTeam] = useState([]);
  return (
    <>
      <Search setHeroTeam={setHeroTeam} />
      <div className='d-flex'>
        <MyTeam heroTeam={heroTeam} />
      </div>
    </>
  );
};
