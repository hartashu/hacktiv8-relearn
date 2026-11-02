const TodoController = require('./controllers/TodoController');

const command = process.argv[2];
const params = process.argv.slice(3);
const targetId = Number(params[0]);

switch (command) {
  case 'list':
    TodoController.list();
    break;

  case 'add':
    TodoController.add(params[0]);
    break;

  case 'findById':
    TodoController.findOne(targetId);
    break;

  case 'delete':
    TodoController.delete(targetId);
    break;

  case 'complete':
    TodoController.completeTask(targetId);
    break;

  case 'uncomplete':
    TodoController.uncompleteTask(targetId);
    break;

  case 'help':
  case undefined:
  default:
    TodoController.help();
    break;
}
