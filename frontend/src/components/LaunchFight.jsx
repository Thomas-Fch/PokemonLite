function LaunchFight({ pokemon }) {
  const bulbasaur = pokemon[0];
  const rattata = pokemon[18];

  console.info(bulbasaur, rattata);

  const score = (fighter1, fighter2) => {
    return fighter1.isAlive()
      ? {
          winner: fighter1,
          loser: fighter2,
        }
      : {
          winner: fighter2,
          loser: fighter1,
        };
  };

  const roundDisplay = (fighter1, fighter2) => {
    return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
  };

  {
    let round = 1;

    while (bulbasaur.isAlive() && rattata.isAlive()) {
      console.info(`🕛 Round #${round}`);

      bulbasaur.fight(rattata);
      console.info(roundDisplay(bulbasaur, rattata));

      rattata.fight(bulbasaur);
      console.info(roundDisplay(rattata, bulbasaur));

      round += 1;
    }

    const result = score(bulbasaur, rattata);

    console.info(`💀 ${result.loser.name} is dead`);
    console.info(`🏆 ${result.winner.name} wins (💙 ${result.winner.life} )`);
  }
}

export default LaunchFight;
