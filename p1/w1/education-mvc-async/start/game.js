const Controller = require("./controllers/controller");

const [command, input1, input2] = process.argv.slice(2);

switch (command) {
  case 'help':
    Controller.help();
    break;

  case 'list':
    Controller.gameList();
    break;

  case 'add':
    Controller.addGame(input1, input2);
    break;

  case 'delete':
    Controller.deleteGame(+input1);
    break;

  default:
    Controller.help();
    break;
}