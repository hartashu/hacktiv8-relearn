const fs = require('fs').promises;
const path = require('path');
const CustomerFactory = require('./CustomerFactory');
const TicketFactory = require('./TicketFactory');

class CustomerModel {
  static #filePath = path.join(__dirname, '../data/customers.json');

  static async findAll() {
    const rawData = await fs.readFile(this.#filePath, 'utf-8');
    const parsedData = JSON.parse(rawData);
    const data = parsedData.map((customer) =>
      CustomerFactory.createCustomer(customer),
    );

    return data;
  }

  static async findCustomersByTheaterName(theaterName) {
    const customers = await this.findAll();
    const filteredCustomers = customers.filter(
      ({ ticket }) => ticket.theaterName === theaterName,
    );

    return filteredCustomers;
  }

  static async create({ name, gender, seatNumber, type, theater }) {
    if (
      !seatNumber ||
      seatNumber.length !== 3 ||
      seatNumber[0] < 'A' ||
      seatNumber[0] > 'F' ||
      Number(seatNumber[2]) < 1 ||
      Number(seatNumber[2]) > 8 ||
      seatNumber[1] !== '-'
    ) {
      throw new Error(`Seat with number ${seatNumber} is out of range`);
    }

    const customers = await this.findAll();

    const filteredCustomers = customers.filter(
      ({ ticket }) => ticket.theaterName === theater.name,
    );

    const isBooked = filteredCustomers.find(
      ({ ticket }) => ticket.seatNumber === seatNumber,
    );

    if (isBooked) {
      throw new Error('Seat already been booked, please choose another seat');
    }

    const lastIndex = customers.length > 0 ? customers.at(-1).id : 0;

    const ticket = {
      theaterName: theater.name,
      type,
      movie: theater.movie,
      seatNumber,
    };

    const newCustomer = CustomerFactory.createCustomer({
      id: lastIndex + 1,
      name,
      gender,
      ticket,
    });

    customers.push(newCustomer);

    this.save(customers);

    return ticket;
  }

  static async findById(customerId) {
    const customers = await this.findAll();
    const foundCustomer = customers.find(({ id }) => id === customerId);

    if (!foundCustomer) {
      throw new Error('Customer not found, please check your input');
    }

    return foundCustomer;
  }

  static async save(customers) {
    await fs.writeFile(this.#filePath, JSON.stringify(customers, null, 2));
  }
}

module.exports = CustomerModel;
