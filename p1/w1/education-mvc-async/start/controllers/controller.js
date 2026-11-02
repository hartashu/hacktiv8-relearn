const Model = require("../models/model");
const View = require("../views/view");

class Controller {
  static help() {
    View.showHelp();
  }

  static async gameList() {
    try {
      const games = await Model.readGames();
      View.showGames(games);
    } catch (error) {
      View.showError(error);
    }
  }

  static async addGame(gameName, gameDeveloper) {
    try {
      const addedGame = await Model.addGame(gameName, gameDeveloper);
      View.showAddedGame(addedGame);
    } catch (error) {
      View.showError(error);
    }
  }

  static async deleteGame(idGame) {
    try {
      const deletedGame = await Model.deleteGame(idGame);
      View.showDeletedGame(deletedGame);
    } catch (error) {
      View.showError(error);
    }
  }
}

module.exports = Controller;