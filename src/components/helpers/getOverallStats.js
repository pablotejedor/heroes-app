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
    { stat: 'Combat', value: overallCombat, color:'#ff595e' },
    { stat: 'Durability', value: overallDurability, color:'#ffca3a' },
    { stat: 'Intelligence', value: overallIntelligence, color:'#1982c4' },
    { stat: 'Power', value: overallPower, color:'#6a4c93' },
    { stat: 'Speed', value: overallSpeed, color:'#8ac926' },
    { stat: 'Strength', value: overallStrength, color:'#fb8b24' },
  ];
  const sortedTotalStats = totalStats.sort((a, b) => b.value - a.value);
  return sortedTotalStats;
};
