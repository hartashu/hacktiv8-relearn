class AppView {
  static showError(error) {
    console.log(error.message);
  }

  static showHelp() {
    console.log(`
node app.js
node app.js help
node app.js theaterList
node app.js customerList
node app.js checkSeat <id_theater>
node app.js buyTicket <id_theater> <nama_penonton> <gender_penonton> <seat_number> <tipe_ticket>
node app.js ticketInfo <id_penonton>  
    `);
  }

  static showTheaters(theaters) {
    console.table(
      theaters.map(({ id, name, movie }) => ({
        'Theater ID': id,
        'Theater Name': name,
        Movie: movie,
      })),
    );
  }

  static showCustomers(customers) {
    console.table(
      customers.map(({ id, name, gender, ticket }) => ({
        ID: id,
        Name: name,
        Gender: gender,
        'Theater Name': ticket.theaterName,
      })),
    );
  }

  static showCheckSeat(theater) {
    console.log(theater);
  }

  static showBuyTicket(ticket) {
    console.log(
      `Success buy ticket for seat ${ticket.seatNumber} for ${ticket.theaterName} to watch ${ticket.movie}`,
    );
  }

  static showTicketInfo(customer) {
    console.log(
      `This ${customer.ticket.type} ticket are booked for ${customer.name} to watch ${customer.ticket.movie} with seat number ${customer.ticket.seatNumber}`,
    );
  }
}

module.exports = AppView;
