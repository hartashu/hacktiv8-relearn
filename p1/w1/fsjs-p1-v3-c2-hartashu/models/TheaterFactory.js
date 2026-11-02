class Theater {
  constructor({ id, name, movie, customers = [] }) {
    this.id = id;
    this.name = name;
    this.movie = movie;
    this.customers = customers;
  }
}

class TheaterFactory {
  static createTheater({ id, name, movie, customers = [] }) {
    return new Theater({ id, name, movie, customers });
  }
}

module.exports = TheaterFactory;
