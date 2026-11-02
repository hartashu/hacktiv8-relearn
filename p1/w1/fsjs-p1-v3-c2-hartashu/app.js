const AppController = require('./controllers/AppController');

const command = process.argv[2];
const params = process.argv.slice(3);

switch (command) {
  case 'theaterList':
    AppController.theaterList();
    break;

  case 'customerList':
    AppController.customerList();
    break;

  case 'checkSeat':
    AppController.checkSeat(Number(params[0]));
    break;

  case 'buyTicket':
    AppController.buyTicket(params);
    break;

  case 'ticketInfo':
    AppController.ticketInfo(Number(params[0]));
    break;

  case 'help':
  case undefined:
  default:
    AppController.help();
    break;
}
