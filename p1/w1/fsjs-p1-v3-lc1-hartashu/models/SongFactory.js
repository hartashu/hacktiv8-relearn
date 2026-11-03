class Song {
  constructor({ name, group, duration }) {
    this.name = name;
    this.group = group;
    this.duration = duration;
  }

  get durationInMinute() {
    const minutes = Math.floor(this.duration / 60);
    const second = this.duration % 60;
    return `${minutes}:${second < 10 ? '0' : ''}${second}`;
  }
}

class SongFactory {
  static createSong({ name, group, duration }) {
    return new Song({ name, group, duration });
  }
}

module.exports = SongFactory;
