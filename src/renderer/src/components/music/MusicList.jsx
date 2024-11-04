import React from 'react';

const MusicList = ({ searchResults, onTrackSelect }) => {
  return (
    <ul className=' max-h-[300px] overflow-y-scroll'>
      {searchResults.map((track) => (
        <li className=' py-[5px] border-b border-gray-400' key={track.id} onClick={() => onTrackSelect(track)}>
          {track.artist_name} - {track.name}
        </li>
      ))}
    </ul>
  );
};

export default MusicList;