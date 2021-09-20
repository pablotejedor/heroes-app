export const getOverallStats = heroTeam => {
  let overallCombat = 0;
  let overallDurability = 0;
  let overallIntelligence = 0;
  let overallPower = 0;
  let overallSpeed = 0;
  let overallStrength = 0;

  for (let i = 0; i < heroTeam.length; i++) {
    overallCombat += parseInt(heroTeam[i].powerstats.combat) || 0;
    overallDurability += parseInt(heroTeam[i].powerstats.durability) || 0;
    overallIntelligence += parseInt(heroTeam[i].powerstats.intelligence) || 0;
    overallPower += parseInt(heroTeam[i].powerstats.power) || 0;
    overallSpeed += parseInt(heroTeam[i].powerstats.speed) || 0;
    overallStrength += parseInt(heroTeam[i].powerstats.strength) || 0;
  }
  const totalStats = [
    { stat: 'Combat', value: overallCombat, color:'bg-danger' },
    { stat: 'Durability', value: overallDurability, color:'bg-secondary' },
    { stat: 'Intelligence', value: overallIntelligence, color:'bg-primary' },
    { stat: 'Power', value: overallPower, color:'bg-info' },
    { stat: 'Speed', value: overallSpeed, color:'bg-success' },
    { stat: 'Strength', value: overallStrength, color:'bg-warning' },
  ];
  const sortedTotalStats = totalStats.sort((a, b) => b.value - a.value);
  return sortedTotalStats;
};
