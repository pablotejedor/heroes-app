import React from 'react';

export const HeroCardTeam = ({ hero }) => {
  console.log(hero);

  return (
    <div
      className="card ms-3 animate__animated animate__fadeIn m-5"
      //   style={backgroundImage}
    >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={hero.image.url} className="card-img" alt={hero.id} />
        </div>
        <div className="col-md-8">
          <h2> {hero.name} </h2>
        </div>
      </div>
    </div>
  );
};
