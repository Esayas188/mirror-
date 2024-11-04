import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MusicList from './MusicList';
import MusicPlayer from './MusicPlayer';

const FinalPlayer = ({ toggleMusicMode }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const handleTrackSelect = (track) => {
    console.log( 'this is track',track)
    setCurrentTrack(track);
  };

  return (
    <div className='  '>
        <div className='relative mx-auto flex p-[20px] rounded-3xl border border-gray-600 flex-col w-[800px] bg-gray-800 bg-opacity-70 '>
            <div className=' flex justify-center items-center '>
                <SearchBar onSearch={handleSearch} />
                <button onClick={toggleMusicMode} className="text-white border border-gray-400 bg-[#0d1829] px-4 py-2 rounded">
                  close
                </button>
            </div>
            <div className=' flex gap-[10px] p-[20px] '>
                <div className=' pr-[20px]'>
                 <MusicList searchResults={searchResults} onTrackSelect={handleTrackSelect}  />


                </div>
                {currentTrack && <MusicPlayer currentTrack={currentTrack} />}
            </div>
           
        </div>

    </div>
  );
};

export default FinalPlayer;