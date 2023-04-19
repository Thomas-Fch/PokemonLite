// import { useEffect, useState } from "react";

function LaunchFight({ pokemon }) {
  // const [bulbasaur, setBulbasaur] = useState(null);
  // const [rattata, setRattata] = useState(null);

  // useEffect(() => {
  //   if (pokemon) {
  //     setBulbasaur(pokemon[0]);
  //     setRattata(pokemon[18]);
  //   }
  // }, [pokemon]);

  const bulbasaur = pokemon[0];
  const rattata = pokemon[18];

  console.info(bulbasaur, rattata);

  // const score = (fighter1, fighter2) => {
  //   return fighter1.isAlive()
  //     ? {
  //         winner: fighter1,
  //         loser: fighter2,
  //       }
  //     : {
  //         winner: fighter2,
  //         loser: fighter1,
  //       };
  // };

  // {
  //   let round = 1;

  //   while (bulbasaur.isAlive() && rattata.isAlive()) {
  //     console.log(`🕛 Round #${round}`);

  //     bulbasaur.fight(rattata);
  //     console.log(roundDisplay(bulbasaur, rattata));

  //     rattata.fight(bulbasaur);
  //     console.log(roundDisplay(rattata, bulbasaur));

  //     round += 1;
  //   }

  //   const result = score(bulbasaur, rattata);

  //   console.log(`💀 ${result.loser.name} is dead`);
  //   console.log(`🏆 ${result.winner.name} wins (💙 ${result.winner.life} )`);
  // }
}

export default LaunchFight;
