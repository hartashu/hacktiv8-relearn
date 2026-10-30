class Game {
  constructor(id, name, developer) {
    this.id = id;
    this.name = name;
    this.developer = developer;
  }
}

class GameFactory {
  static createGame(id, name, developer) {
    return new Game(id, name, developer);
  }
}

module.exports = GameFactory;