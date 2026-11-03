const fs = require('fs').promises;
const path = require('path');
const SongFactory = require('./SongFactory');
const PlaylistFactory = require('./PlaylistFactory');

class PlaylistModel {
  static #filePath = path.join(__dirname, '../data.json');

  static async findAll() {
    const rawData = await fs.readFile(this.#filePath, 'utf-8');
    const parsedData = JSON.parse(rawData);
    const data = parsedData.map(({ id, name, type, songs: rawSongs }) =>
      PlaylistFactory.createPlaylist({
        id,
        name,
        type,
        songs: rawSongs.map((rawSong) => SongFactory.createSong(rawSong)),
      }),
    );

    return data;
  }

  static async findPlaylistById(playlistId, sourcePlaylist) {
    const playlists = sourcePlaylist || (await this.findAll());

    const foundPlaylist = playlists.find(({ id }) => id === playlistId);
    if (!foundPlaylist) {
      throw new Error('Invalid playlist ID');
    }

    return foundPlaylist;
  }

  static async findSongsByPlaylistId(playlistId) {
    const playlists = await this.findAll();
    const foundPlaylist = await this.findPlaylistById(playlistId, playlists);

    return foundPlaylist.songs;
  }

  static async createSongToPlaylistId({ playlistId, name, group, duration }) {
    const playlists = await this.findAll();
    const foundPlaylist = await this.findPlaylistById(playlistId, playlists);

    if (foundPlaylist.songs.length >= foundPlaylist.limit) {
      throw new Error('Cannot add song anymore. Limit has been reached!');
    }

    const newSong = SongFactory.createSong({ name, group, duration });
    foundPlaylist.songs.push(newSong);

    await this.save(playlists);

    return foundPlaylist;
  }

  static async save(data) {
    await fs.writeFile(this.#filePath, JSON.stringify(data, null, 2));
  }
}

module.exports = PlaylistModel;
