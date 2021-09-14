import React from 'react';

export const HeroCardTeam = ({ hero }) => {
  console.log(hero);
  const estilo = {
    width: '18rem',
  };
  return (
    // >
    // <div>
    //   <div className="col-md-4">
    //     <img src={hero.image.url} className="card-img" alt={hero.id} />
    //   </div>
    //   <div className="col-md-8">
    //     <h2> {hero.name} </h2>
    //   </div>
    // </div>

    <div style={estilo}>
      <img class="card-img-top" src={hero.image.url} alt={hero.id} />
      <div class="card-body">
        <h5 class="card-title">{hero.name}</h5>
        <p class="card-text">Attributes:</p>
      </div>
    </div>
  );
};
