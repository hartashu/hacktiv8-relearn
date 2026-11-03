class Playlist {
  #limit;

  constructor({ id, name, type, songs = [], limit }) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.songs = songs;
    this.#limit = limit;
  }

  get limit() {
    return this.#limit;
  }

  set limit(value) {
    this.#limit = value;
  }

  get trackLength() {
    return this.songs.length;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      songs: this.songs,
      limit: this.#limit,
    };
  }
}

class Mythic extends Playlist {
  constructor({ id, name, songs = [] }) {
    super({ id, name, type: 'Mythic', songs, limit: 10 });
  }

  get trackLength() {
    return `- ${super.trackLength} 🐉`;
  }
}

class Legend extends Playlist {
  constructor({ id, name, songs = [] }) {
    super({ id, name, type: 'Legend', songs, limit: 6 });
  }

  get trackLength() {
    return `* ${super.trackLength} 🦁`;
  }
}

class Epic extends Playlist {
  constructor({ id, name, songs = [] }) {
    super({ id, name, type: 'Epic', songs, limit: 4 });
  }

  get trackLength() {
    return `+ ${super.trackLength} 😹`;
  }
}

class PlaylistFactory {
  static createPlaylist({ id, name, type, songs = [] }) {
    if (type === 'Mythic') {
      return new Mythic({ id, name, songs });
    } else if (type === 'Legend') {
      return new Legend({ id, name, songs });
    } else if (type === 'Epic') {
      return new Epic({ id, name, songs });
    }

    throw new Error(`Type ${type} is not available!`);
  }
}

module.exports = PlaylistFactory;
