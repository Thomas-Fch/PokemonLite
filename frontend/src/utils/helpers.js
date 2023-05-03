function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * max);
}

function attack(attacker, receiver) {
  const attackPoints = getRandomInt(attacker.attack);

  const damages = Math.max(attackPoints - receiver.defence, 0);
  console.info(attackPoints);

  return damages;
}
