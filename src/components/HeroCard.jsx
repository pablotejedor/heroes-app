import React from 'react';

export const HeroCard = ({ hero, setHeroTeam }) => {
  const colors = {
    good: '#236494',
    bad: '#b61617',
  };
  const backgroundImage = {
    backgroundColor: `${colors[hero.biography.alignment]}`,
    width: '18rem',
  };

  // return (
  //   <div
  //     className="card ms-3 animate__animated animate__fadeIn m-5"
  //     style={backgroundImage}
  //   >
  //     <div className="row no-gutters">
  //       <div className="col-md-4">
  //         <img src={hero.image.url} className="card-img" alt={hero.id} />
  //       </div>
  //       <div className="col-md-8">
  //         <h5> {hero.name} </h5>
  //         <button
  //           onClick={() => setHeroTeam(member => [hero, ...member])}
  //           type="button"
  //           className="btn btn-light"
  //         >
  //           Add to my team
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
  
  return (
    <div class="card" style={backgroundImage}>
      <img class="card-img-top" src={hero.image.url} alt={hero.id} />
      <div class="card-body">
        <h5 class="card-title">{hero.name}</h5>
        <button
          onClick={() => setHeroTeam(member => [hero, ...member])}
          type="button"
          className="btn btn-light"
        >
          Add to my team
        </button>
      </div>
    </div>
  );
};
