import Pokemon from "./PokemonStats";

class WildPokemon extends Pokemon {
  constructor(pokemonObject, level, xp) {
    super(pokemonObject, level, xp);
    this.name = pokemonObject.name;
    this.level = level;
    this.xp = xp;
  }
}
// const rattata01 = new WildPokemon();
export default WildPokemon;
