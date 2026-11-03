const PlaylistModel = require('../models/PlaylistModel');
const PlaylistView = require('../views/PlaylistView');

class PlaylistController {
  static async show() {
    try {
      const playlists = await PlaylistModel.findAll();
      PlaylistView.showPlaylists(playlists);
    } catch (error) {
      PlaylistView.showError(error);
    }
  }

  static async detail(playlistId) {
    try {
      const songs = await PlaylistModel.findSongsByPlaylistId(playlistId);
      PlaylistView.showSongs(songs);
    } catch (error) {
      PlaylistView.showError(error);
    }
  }

  static async trackLength() {
    try {
      const playlists = await PlaylistModel.findAll();
      PlaylistView.showTrackLength(playlists);
    } catch (error) {
      PlaylistView.showError(error);
    }
  }

  static async addToPlaylist({ playlistId, name, group, duration }) {
    try {
      const playlist = await PlaylistModel.createSongToPlaylistId({
        playlistId,
        name,
        group,
        duration,
      });
      PlaylistView.showAddToPlaylist(playlist);
    } catch (error) {
      PlaylistView.showError(error);
    }
  }
}

module.exports = PlaylistController;
