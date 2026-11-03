const PlaylistController = require('./controllers/PlaylistController');

const command = process.argv[2];
const params = process.argv.slice(3);

switch (command) {
  case 'show':
    PlaylistController.show();
    break;

  case 'detail':
    PlaylistController.detail(Number(params[0]));
    break;

  case 'trackLength':
    PlaylistController.trackLength();
    break;

  case 'addToPlaylist':
    PlaylistController.addToPlaylist({
      playlistId: Number(params[0]),
      name: params[1],
      group: params[2],
      duration: Number(params[3]),
    });
    break;
}
