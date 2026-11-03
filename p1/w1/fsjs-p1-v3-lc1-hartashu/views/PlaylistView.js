class PlaylistView {
  static showError(error) {
    console.log(error.message);
  }

  static showPlaylists(playlists) {
    console.log(playlists);
  }

  static showSongs(songs) {
    console.table(
      songs.map(({ name, group, durationInMinute }) => ({
        name,
        group,
        durationInMinute,
      })),
    );
  }

  static showTrackLength(playlists) {
    console.table(
      playlists.map(({ id, name, type, limit, trackLength }) => ({
        id,
        name,
        type,
        limit,
        trackLength,
      })),
    );
  }

  static showAddToPlaylist({ type, songs, limit }) {
    console.log(
      `Successfully adding new song to playlist type ${type}, and remaining available slot for song on playlist: ${limit - songs.length}`,
    );
  }
}

module.exports = PlaylistView;
