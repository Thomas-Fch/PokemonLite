import PropTypes from "prop-types";

function GetStarter({ pokemon, setPokemonTeam }) {
  const handleClick = () => {
    setPokemonTeam([pokemon[0]]);
  };
  return (
    <button type="button" onClick={() => handleClick()}>
      START
    </button>
  );
}
GetStarter.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setPokemonTeam: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default GetStarter;
