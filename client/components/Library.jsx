import React, {useState} from 'react';
const axios = require ('axios');

const Library = () => {
  const [playlists, setPlaylists] = useState([]); // State to hold playlists
  const [searchQuery, setSearchQuery] = useState(""); // State to filter playlists
  const [newPlaylist, setNewPlaylist] = useState({ name: "", songs: [] }); // State for creating new playlists

  // Add a new playlist
  const addPlaylist = () => {
    if (newPlaylist.name) {
      const playlistToAdd = { id: Date.now(), name: newPlaylist.name, songs: [] };
      setPlaylists([...playlists, playlistToAdd]);
      setNewPlaylist({ name: "", songs: [] }); // Reset form after adding
    } else {
      alert("Please provide a name for the playlist.");
    }
  };

  // Filter playlists based on search query
  const filteredPlaylists = playlists.filter((playlist) =>
    playlist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add a song to a playlist
  const addSongToPlaylist = (playlistId, title, artist, duration) => {
    const updatedPlaylists = playlists.map((playlist) => {
      if (playlist.id === playlistId) {
        return {
          ...playlist,
          songs: [
            ...playlist.songs,
            { id: Date.now(), title, artist, duration },
          ],
        };
      }
      return playlist;
    });
    setPlaylists(updatedPlaylists);
  };

  return (
    <div className='library-playlist' style={{ border: "2px solid black", padding: "10px", borderRadius: "8px", width: "300px", height: "400px" }}>
      <h2>🎵 Library Playlist 🎵</h2>
      
      {/* Search input for playlists */}
      <input
        type="text"
        placeholder="Search playlists..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      {/* Form to add a new playlist */}
      <div>
        <input
          type="text"
          placeholder="Playlist Name"
          value={newPlaylist.name}
          onChange={(e) => setNewPlaylist({ ...newPlaylist, name: e.target.value })}
        />
        <button onClick={addPlaylist}>➕ Add Playlist</button>
      </div>

      {/* Display filtered playlists */}
      <ul>
        {filteredPlaylists.length > 0 ? (
          filteredPlaylists.map((playlist) => (
            <li key={playlist.id}>
              <h4>{playlist.name}</h4>
              <ul>
                {playlist.songs.length > 0 ? (
                  playlist.songs.map((song) => (
                    <li key={song.id}>
                      {song.title} - {song.artist} ({song.duration})
                    </li>
                  ))
                ) : (
                  <p>No songs in this playlist.</p>
                )}
              </ul>
              {/* Form to add a song to the playlist */}
              <div>
                <input
                  type="text"
                  placeholder="Song Title"
                  onChange={(e) => setNewPlaylist({ ...newPlaylist, songTitle: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Artist"
                  onChange={(e) => setNewPlaylist({ ...newPlaylist, songArtist: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Duration (e.g., 3:30)"
                  onChange={(e) => setNewPlaylist({ ...newPlaylist, songDuration: e.target.value })}
                />
                <button onClick={() => addSongToPlaylist(playlist.id, newPlaylist.songTitle, newPlaylist.songArtist, newPlaylist.songDuration)}>
                  ➕ Add Song
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No playlists found.</p>
        )}
      </ul>
    </div>
  );
};
export default Library;