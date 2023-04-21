class Pokemon {
  constructor(pokemonObject) {
    this.name = pokemonObject.name;
    this.stats = pokemonObject.stats;
    this.life = pokemonObject.stats[0].base_stat;
    this.attack = pokemonObject.stats[1].base_stat;
    this.defence = pokemonObject.stats[2].base_stat;
    this.speed = pokemonObject.stats[5].base_stat;
    this.id = pokemonObject.id;
    this.type = pokemonObject.types;
    this.image = pokemonObject.sprites.other["official-artwork"].front_default;
  }

  setLife(value) {
    this.life = value;
  }

  fight(defender) {
    if (defender instanceof Pokemon) {
      const attackPoints = this.getRandomInt(this.attack);

      const damages = Math.max(attackPoints - defender.defence, 0);

      defender.setLife(Math.max(defender.life - damages, 0));

      if (defender.isAlive()) {
        defender.fight(this);
      }
    }
  }

  getRandomInt(max) {
    console.info(this.attack);
    return 1 + Math.floor(Math.random() * max);
  }

  isAlive() {
    return this.life > 0;
  }
}

export default Pokemon;
