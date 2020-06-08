var playlist  = { BobSeger: "Night Moves" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}