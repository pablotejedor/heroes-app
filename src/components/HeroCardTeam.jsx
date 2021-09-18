import React from 'react';
import ReactTooltip from 'react-tooltip';
export const HeroCardTeam = ({ hero, heroTeam, setHeroTeam }) => {
  const colors = {
    good: '#236494',
    bad: '#b61617',
  };
  const backgroundImage = {
    backgroundColor: `${colors[hero.biography.alignment]}`,
    width: '10rem',
  };
  
  const deleteHero = () => {
    const filteredList = heroTeam.filter(element => element.id !== hero.id);
    setHeroTeam(filteredList)
  };
  // console.log('altura ' + parseInt(hero.appearance.height[1]))
  // console.log('peso ' + parseInt(hero.appearance.weight[1]))
  return (
    <div className="m-3 text-center rounded" style={backgroundImage}>
      <img className="card-img-top" src={hero.image.url} alt={hero.id} />
      <div className="card-body">
        <h5 className="card-title">{hero.name}</h5>
        <div className="d-flex flex-column">
          <button
            type="button"
            className="btn btn-success m-1"
            data-tip="attributes"
            data-for={hero.name + hero.id}
          >
            Attributes
          </button>

          <ReactTooltip
            id={hero.name + hero.id}
            place="top"
            type="success"
            effect="solid"
          >
            Combat: {hero.powerstats.combat}
            <br />
            Durability: {hero.powerstats.durability}
            <br />
            Intelligence: {hero.powerstats.intelligence}
            <br />
            Power: {hero.powerstats.power}
            <br />
            Speed: {hero.powerstats.speed}
            <br />
            Strength: {hero.powerstats.strength}
          </ReactTooltip>
          <button
            type="button"
            className="btn btn-success m-1"
            data-tip="info"
            data-for={hero.id}
            data-multiline="true"
            id={hero.id}
          >
            Info
          </button>
          <ReactTooltip id={hero.id} place="top" type="success" effect="solid">
            Weight: {hero.appearance.weight[1]}
            <br />
            Height: {hero.appearance.height[1]}
            <br />
            Name: {hero.biography['full-name']}
            <br />
            Aliases: {hero.biography.aliases.map(alias => alias).join(', ')}
            <br />
            Eye color: {hero.appearance['eye-color']}
            <br />
            Hair color: {hero.appearance['hair-color']}
            <br />
            Place of work: {hero.work.base}
          </ReactTooltip>
          <button
            onClick={deleteHero}
            type="button"
            className="btn btn-danger m-1"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
