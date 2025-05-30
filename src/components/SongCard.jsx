import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song = {}, isPlaying, activeSong, i, data }) => {
  const dispatch = useDispatch();
  
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  // Safely get attributes with fallback to empty object
  const attributes = song?.attributes || {};
  const artworkUrl = attributes?.artwork?.url || '';
  const songName = attributes?.name || attributes?.albumName || 'Unknown Song';
  const artistName = attributes?.artistName || 'Unknown Artist';

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 flex justify-center items-center bg-violet-900 bg-opacity-40 group-hover:flex  ${
          activeSong?.attributes?.name === attributes?.name 
            ? 'flex bg-black/5 bg-opacity-80' 
            : 'hidden'
        }`}>
          <PlayPause 
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handLePause={handlePauseClick}
            handLePlay={handlePlayClick}
          />
        </div>
        {artworkUrl && (
          <img 
            src={artworkUrl} 
            alt="song_img" 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-violet-200 truncate">
          <Link to={`/songs/${song?.id || 'unknown'}`}>
            {songName}
          </Link>
        </p>
        <p className="text-sm truncate text-violet-200 mt-1">
          <Link to={song?.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {artistName}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;