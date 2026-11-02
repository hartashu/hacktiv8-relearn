const GameFactory = require('./class');
const fs = require('fs').promises;

class Model {
  static async readGames() {
    try {
      const gamesRaw = JSON.parse(await fs.readFile('./data/games.json', 'utf-8'));
      const games = gamesRaw.map(game => GameFactory.createGame(game.id, game.name, game.developer));

      return games;
    } catch (error) {
      throw error;
    }
  }

  static async addGame(gameName, gameDeveloper) {
    try {
      const games = await Model.readGames();

      const gameFound = games.find(game => game.name === gameName);
      if (gameFound) throw `Game ${gameName} is already exist`;

      const newGame = GameFactory.createGame(games.at(-1).id + 1, gameName, gameDeveloper);
      games.push(newGame);

      await Model.save('./data/games.json', games);

      return newGame;
    } catch (error) {
      throw error;
    }
  }

  static async deleteGame(idGame) {
    try {
      const games = await Model.readGames();

      const gameFound = games.find(game => game.id === idGame);
      if (!gameFound) throw `Game with id ${idGame} is not exist`;

      const newGames = games.filter(game => game.id !== idGame);

      await Model.save('./data/games.json', newGames);

      return gameFound;
    } catch (error) {
      throw error;
    }
  }

  static async save(path, data) {
    try {
      await fs.writeFile(path, JSON.stringify(data, null, 2));
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Model;