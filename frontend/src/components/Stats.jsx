import PropTypes from "prop-types";

function Stats({ pokemon }) {
  return (
    <>
      <h1>
        {pokemon.name} #{pokemon.id.toString().padStart(3, "0")}
      </h1>
      <h2>{pokemon.getTypes().join(" - ")}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>
        {pokemon.stats[0].stat.name} = {pokemon.stats[0].base_stat}
      </p>
      <p>
        {pokemon.stats[1].stat.name} = {pokemon.stats[1].base_stat}
      </p>
      <p>
        {pokemon.stats[2].stat.name} = {pokemon.stats[2].base_stat}
      </p>
      <p>
        {pokemon.stats[5].stat.name} = {pokemon.stats[5].base_stat}
      </p>
    </>
  );
}

Stats.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default Stats;
