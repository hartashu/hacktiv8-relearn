const BankController = require('./controllers/BankController');

const command = process.argv[2];
const params = process.argv.slice(3);

switch (command) {
  case 'list':
    BankController.list();
    break;

  case 'addCustomer':
    BankController.addCustomer({
      bankId: params[0],
      name: params[1],
      ktp: params[2],
      depositAmount: params[3],
    });
    break;

  case 'deleteCustomer':
    BankController.deleteCustomer({ bankId: params[0], ktp: params[1] });
    break;

  case 'detail':
    BankController.detail({ bankId: params[0] });
    break;

  case 'addInterest':
    BankController.addInterest({ bankId: params[0] });
    break;
}
