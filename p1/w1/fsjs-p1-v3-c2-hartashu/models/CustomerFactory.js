const TicketFactory = require('./TicketFactory');

class Customer {
  constructor({ id, name, gender, ticket }) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.ticket = ticket;
  }
}

class CustomerFactory {
  static createCustomer({ id, name, gender, ticket }) {
    const newTicket = TicketFactory.createTicket(ticket);
    return new Customer({ id, name, gender, ticket: newTicket });
  }
}

module.exports = CustomerFactory;
