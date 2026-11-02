const GameController = require('./controllers/GameController');

const command = process.argv[2];
const params = process.argv.slice(3);

switch (command) {
  case 'list':
    GameController.list();
    break;

  case 'add':
    GameController.add(params[0], params[1]);
    break;

  case 'delete':
    GameController.delete(Number(params[0]));
    break;

  case 'help':
  case undefined:
  default:
    GameController.help();
    break;
}
