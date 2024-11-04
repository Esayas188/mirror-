// MusicPlayer.jsx
import React from 'react';
import ReactPlayer from 'react-player';

const MusicPlayer = ({ currentTrack }) => {
  return (
    <div>
      {currentTrack ? (
        <>
          <h2>Now Playing: {currentTrack.name} by {currentTrack.artist_name}</h2>
          <ReactPlayer
            url={currentTrack.audio} // Ensure this URL is valid
            playing={true} // Auto-play when a track is selected
            width="100%"
            height="200px"
            controls // Show player controls
            onError={(e) => console.error("Error playing track:", e)} // Log any errors
          />
        </>
      ) : (
        <h2>Select a track to play</h2>
      )}
    </div>
  );
};

export default MusicPlayer;
