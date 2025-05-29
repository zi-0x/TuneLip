import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handLePause, handLePlay }) => (
  isPlaying && activeSong?.attributes?.name === song?.attributes?.name ? (
    <FaPauseCircle
    size={35}
    className="text-violet-200"
    onClick={handLePause}
    />
  ) : (
    <FaPlayCircle
    size={35}
    className="text-violet-200"
    onClick={handLePlay}
  />)
  ) ;

export default PlayPause;
