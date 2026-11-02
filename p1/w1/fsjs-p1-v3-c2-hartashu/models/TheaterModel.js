const fs = require('fs').promises;
const path = require('path');
const TheaterFactory = require('./TheaterFactory');

class TheaterModel {
  static #filePath = path.join(__dirname, '../data/theaters.json');

  static async findAll() {
    const rawData = await fs.readFile(this.#filePath, 'utf-8');
    const parsedData = JSON.parse(rawData);
    const data = parsedData.map((theater) =>
      TheaterFactory.createTheater(theater),
    );

    return data;
  }

  static async findById(theaterId) {
    const theaters = await this.findAll();
    const foundTheater = theaters.find(({ id }) => id === theaterId);

    if (!foundTheater) {
      throw new Error('Theater not found, please check your input');
    }

    return foundTheater;
  }
}

module.exports = TheaterModel;
