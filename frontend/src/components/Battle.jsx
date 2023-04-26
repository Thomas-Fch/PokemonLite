import PropTypes from "prop-types";
import { useEffect } from "react";
import PokemonBattleInfo from "./PokemonBattleInfo";

function Battle({ arena, handleArenaChange, setMode }) {
  const { pokemonStarter, pokemonEnemy } = arena;

  useEffect(() => {
    const newArena = arena.fight();
    handleArenaChange(newArena);
    console.info("pokemon life: ", pokemonStarter.life);
    console.info("enemy life: ", pokemonEnemy.life);

    if (pokemonStarter.life === 0 || pokemonEnemy.life === 0) {
      setMode("gameOver");
    }
  }, [pokemonStarter.life, pokemonEnemy.life]);

  return (
    <div className="battle-field">
      <section className="pokemon-info">
        <article>
          <PokemonBattleInfo
            name={pokemonStarter?.name}
            maxLife={pokemonStarter.max_life}
            life={pokemonStarter.life}
          />
        </article>
        <article>
          <PokemonBattleInfo
            name={pokemonEnemy?.name}
            maxLife={pokemonEnemy?.max_life}
            life={pokemonEnemy.life}
          />
        </article>
      </section>

      <section className="battle-ground">
        <div className="pokemon enemy">
          <img
            src={pokemonEnemy?.image}
            alt={pokemonEnemy?.name}
            className="profile enemy-img"
          />
        </div>
        <div className="pokemon starter">
          <img
            src={pokemonStarter?.image}
            alt={pokemonStarter?.name}
            className="profile starter-img"
          />
        </div>
      </section>
    </div>
  );
}

Battle.propTypes = {
  arena: PropTypes.shape({
    pokemonEnemy: PropTypes.shape({
      name: PropTypes.string,
      life: PropTypes.number,
      max_life: PropTypes.number,
      image: PropTypes.string,
    }),
    pokemonStarter: PropTypes.shape({
      name: PropTypes.string,
      life: PropTypes.number,
      max_life: PropTypes.number,
      image: PropTypes.string,
    }),
    fight: PropTypes.func,
  }).isRequired,
  handleArenaChange: PropTypes.func.isRequired,
  setMode: PropTypes.func.isRequired,
};

export default Battle;
