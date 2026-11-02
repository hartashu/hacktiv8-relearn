const CustomerModel = require('../models/CustomerModel');
const TheaterModel = require('../models/TheaterModel');
const AppView = require('../views/AppView');

class AppController {
  static help() {
    AppView.showHelp();
  }

  static async theaterList() {
    try {
      const theaters = await TheaterModel.findAll();
      AppView.showTheaters(theaters);
    } catch (error) {
      AppView.showError(error);
    }
  }

  static async customerList() {
    try {
      const customers = await CustomerModel.findAll();
      AppView.showCustomers(customers);
    } catch (error) {
      AppView.showError(error);
    }
  }

  static async checkSeat(theaterId) {
    try {
      const theater = await TheaterModel.findById(theaterId);
      const customers = await CustomerModel.findCustomersByTheaterName(
        theater.name,
      );

      theater.customers = customers;

      AppView.showCheckSeat(theater);
    } catch (error) {
      AppView.showError(error);
    }
  }

  static async buyTicket([theaterId, name, gender, seatNumber, type]) {
    try {
      const theater = await TheaterModel.findById(Number(theaterId));
      const ticket = await CustomerModel.create({
        name,
        gender,
        seatNumber,
        type,
        theater,
      });
      AppView.showBuyTicket(ticket);
    } catch (error) {
      AppView.showError(error);
    }
  }

  static async ticketInfo(customerId) {
    try {
      const customer = await CustomerModel.findById(customerId);
      AppView.showTicketInfo(customer);
    } catch (error) {
      AppView.showError(error);
    }
  }
}

module.exports = AppController;
