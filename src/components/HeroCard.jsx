import React from 'react';

export const HeroCard = ({ hero, heroTeam, setHeroTeam }) => {
  let goodGuys = 0;
  let badGuys = 0;
  let neutralGuys = 0;

  const defineOrientation = () => {
    for (let i = 0; i < heroTeam.length; i++) {
      if (heroTeam[i].biography.alignment === 'good') {
        goodGuys += 1;
      } else if (heroTeam[i].biography.alignment === 'bad') {
        badGuys += 1;
      } else {
        neutralGuys += 1;
      }
    }
  };
  defineOrientation();
  const colors = {
    good: '#236494',
    bad: '#b61617',
  };
  const backgroundImage = {
    backgroundColor: `${colors[hero.biography.alignment]}`,
    width: '13rem',
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
            } else if (goodGuys === 3 && hero.biography.alignment === 'good') {
              alert('Maximum three good guys');
            } else if (badGuys === 3 && hero.biography.alignment === 'bad') {
              alert('Maximum three bad guys');
            } else if (!neutralGuys === 0) {
              alert('No neutral heroes allowed')
            } else {
              setHeroTeam(heroTeam => [...heroTeam, hero]);
            }
          }}
          type="button"
          className="btn btn-light border"
        >
          Add to my team
        </button>
      </div>
    </div>
  );
};
