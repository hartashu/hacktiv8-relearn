const fs = require('fs').promises;
const path = require('path');
const Game = require('./Game');

class GameModel {
  static #filePath = path.join(__dirname, '../data/games.json');

  static async findAll() {
    try {
      const rawData = await fs.readFile(this.#filePath, 'utf-8');
      const parsedData = JSON.parse(rawData);
      const data = parsedData.map((game) => new Game(game));

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async create(name, developer) {
    try {
      const games = await this.findAll();
      const lastId = games.length > 0 ? games.at(-1).id : 0;

      games.push(new Game({ id: lastId + 1, name, developer }));

      await this.save(games);

      return name;
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(deletedId) {
    try {
      const games = await this.findAll();
      const targetGame = games.find(({ id }) => id === deletedId);

      if (!targetGame) {
        throw new Error(`Game dengan ID ${deletedId} tidak ditemukan.`);
      }

      const filteredGames = games.filter(({ id }) => id !== deletedId);
      await this.save(filteredGames);

      return targetGame.name;
    } catch (error) {
      throw error;
    }
  }

  static async save(data) {
    try {
      await fs.writeFile(this.#filePath, JSON.stringify(data, null, 2));
    } catch (error) {
      throw error;
    }
  }
}

module.exports = GameModel;
