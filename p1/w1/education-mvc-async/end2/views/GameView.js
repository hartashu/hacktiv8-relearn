class GameView {
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

  static showList(data) {
    console.table(data);
  }

  static showAdd(name) {
    console.log(`Added "${name}" to your game list...`);
  }

  static showDelete(name) {
    console.log(`Delete "${name}" from your game list...`);
  }

  static showError(error) {
    console.log(error.message);
  }
}

module.exports = GameView;
