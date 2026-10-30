class View {
  static showHelp() {
    console.log(`
      =============
      COMMAND LINE
      =============

      $ node game.js
      $ node game.js help
      $ node game.js list
      $ node game.js add <game_name> <game_developer>
      $ node game.js delete <game_id>

      =============
    `);
  }

  static showGames(games) {
    console.table(games);
  }

  static showAddedGame(addedGame) {
    console.log(`Added "${addedGame.name}" to your game list...`);
  }

  static showDeletedGame(deletedGame) {
    console.log(`Delete "${deletedGame.name}" from your game list...`);
  }

  static showError(error) {
    console.log(error);
  }
}

module.exports = View;