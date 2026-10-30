const GameModel = require('../models/GameModel');
const GameView = require('../views/GameView');

class GameController {
  static help() {
    GameView.showHelp();
  }

  static async list() {
    try {
      const games = await GameModel.findAll();
      GameView.showList(games);
    } catch (error) {
      GameView.showError(error);
    }
  }

  static async add(name, developer) {
    try {
      const addedGameName = await GameModel.create(name, developer);
      GameView.showAdd(addedGameName);
    } catch (error) {
      GameView.showError(error);
    }
  }

  static async delete(id) {
    try {
      const deletedGameName = await GameModel.deleteById(id);
      GameView.showDelete(deletedGameName);
    } catch (error) {
      GameView.showError(error);
    }
  }
}

module.exports = GameController;
