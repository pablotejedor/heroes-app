import React from 'react';

export const HeroCard = ({ hero, heroTeam, setHeroTeam }) => {
  const colors = {
    good: '#236494',
    bad: '#b61617',
  };
  const backgroundImage = {
    backgroundColor: `${colors[hero.biography.alignment]}`,
    width: '10rem',
  };
  return (
    <div className="card m-1 text-center" style={backgroundImage}>
      <img className="card-img-top col-5" src={hero.image.url} alt={hero.id} />
      <div className="card-body">
        <h5 className="card-title">{hero.name}</h5>
        <button
          onClick={() => {
            if (heroTeam.length > 5) {
              alert('Your team must have six members');
            } else {
              setHeroTeam(heroTeam => [hero, ...heroTeam]);
            }
          }}
          type="button"
          className="btn btn-light"
        >
          Add to my team
        </button>
      </div>
    </div>
  );
};
