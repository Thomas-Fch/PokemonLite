import PropTypes from "prop-types";

function LaunchFight({ pokemon }) {
  const attacker = pokemon[0];
  const defender = pokemon[18];

  // function gameStart(attack, defend) {
  //   let firstAttacker;
  //   let secondAttacker;
  //   if (attack.speed > defend.speed) {
  //     firstAttacker = attacker;
  //     secondAttacker = defender;
  //   } else {
  //     firstAttacker = defender;
  //     secondAttacker = attacker;
  //   }
  //   return [firstAttacker, secondAttacker];
  // }

  if (attacker && defender) {
    console.info(attacker, defender);
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

      while (attacker.isAlive() && defender.isAlive()) {
        console.info(`🕛 Round #${round}`);
        defender.fight(attacker);
        attacker.fight(defender);
        // gameStart(defender, attacker);
        console.info(roundDisplay(attacker, defender));
        console.info(roundDisplay(defender, attacker));

        round += 1;
      }

      const result = score(attacker, defender);

      console.info(`💀 ${result.loser.name} is dead`);
      console.info(`🏆 ${result.winner.name} wins (💙 ${result.winner.life} )`);
    }
  }

  return (
    <div>
      <h1>hhfhfh</h1>
    </div>
  );
}

LaunchFight.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      fight: PropTypes.func,
      isAlive: PropTypes.func,
    })
  ).isRequired,
};

export default LaunchFight;
