export const getAccumulatedStats = heroTeam => {
  let accumulatedCombat = 0;
  let accumulatedDurability = 0;
  let accumulatedIntelligence = 0;
  let accumulatedPower = 0;
  let accumulatedSpeed = 0;
  let accumulatedStrength = 0;

  for (let i = 0; i < heroTeam.length; i++) {
    accumulatedCombat += parseInt(heroTeam[i].powerstats.combat) || 0;
    accumulatedDurability += parseInt(heroTeam[i].powerstats.durability) || 0;
    accumulatedIntelligence +=
      parseInt(heroTeam[i].powerstats.intelligence) || 0;
    accumulatedPower += parseInt(heroTeam[i].powerstats.power) || 0;
    accumulatedSpeed += parseInt(heroTeam[i].powerstats.speed) || 0;
    accumulatedStrength += parseInt(heroTeam[i].powerstats.strength) || 0;
  }
  const totalStats = [
    { stat: 'combat', value: accumulatedCombat },
    { stat: 'durability', value: accumulatedDurability },
    { stat: 'intelligence', value: accumulatedIntelligence },
    { stat: 'power', value: accumulatedPower },
    { stat: 'speed', value: accumulatedSpeed },
    { stat: 'strength', value: accumulatedStrength },
  ];
  const sortedTotalStats = totalStats.sort((a, b) => b.value - a.value);
  return sortedTotalStats;
};
