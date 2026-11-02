class BankView {
  static showError(error) {
    console.log(error.message);
  }

  static showList(banks) {
    console.log(banks);
  }

  static showAddCustomer(customerName) {
    console.log(`Customer ${customerName} added successfully`);
  }

  static showDeleteCustomer(customerName) {
    console.log(`Customer with name ${customerName} deleted successfully`);
  }

  static showDetail(customers) {
    console.table(
      customers.map((customer) => ({
        name: customer.name,
        ktp: customer.ktp,
        depositAmount: customer.depositRupiahFormat(),
      })),
    );
  }

  static showAddInterest() {
    console.log('Success add interest by 10%');
  }
}

module.exports = BankView;
