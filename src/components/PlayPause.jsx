import{ FaPauseCircle,FaPlayCircle} from 'react-icons/fa'

const PlayPause = ({isPlaying,activeSong,song, handlePause,handlePlay}) => (
  isPlaying && activeSong?.title ===song.title  ?(
    <FaPlayCircle
    size={35}
    className="text-violet-200"
    onClick={handlePause}
    />
  ) : (
    <FaPauseCircle
    size={35}
    className="text-violet-200"
    onClick={handlePlay}
  />)
  ) ;

export default PlayPause;
