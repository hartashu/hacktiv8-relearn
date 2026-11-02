class Ticket {
  #seatNumber;

  constructor({ theaterName, type, movie, seatNumber }) {
    this.theaterName = theaterName;
    this.type = type;
    this.movie = movie;
    this.#seatNumber = seatNumber;
  }

  get seatNumber() {
    return this.#seatNumber;
  }

  set seatNumber(value) {
    this.#seatNumber = value;
  }

  toJSON() {
    return {
      theaterName: this.theaterName,
      type: this.type,
      movie: this.movie,
      seatNumber: this.#seatNumber,
    };
  }
}

class Regular extends Ticket {
  constructor({ theaterName, movie, seatNumber }) {
    super({ theaterName, type: 'Regular', movie, seatNumber });
  }
}

class IMAX extends Ticket {
  constructor({ theaterName, movie, seatNumber }) {
    super({ theaterName, type: 'IMAX', movie, seatNumber });
  }
}

class Premiere extends Ticket {
  constructor({ theaterName, movie, seatNumber }) {
    super({ theaterName, type: 'Premiere', movie, seatNumber });
  }
}

class TicketFactory {
  static createTicket({ theaterName, type, movie, seatNumber }) {
    if (type === 'Regular') {
      return new Regular({ theaterName, movie, seatNumber });
    } else if (type === 'IMAX') {
      return new IMAX({ theaterName, movie, seatNumber });
    } else if (type === 'Premiere') {
      return new Premiere({ theaterName, movie, seatNumber });
    }

    throw new Error(
      `Ticket type "${type}" is invalid. Available types: Regular, IMAX, Premiere`,
    );
  }
}

module.exports = TicketFactory;
