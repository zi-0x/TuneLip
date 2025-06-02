import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader,Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
 const dispatch =useDispatch();
 const { songid } = useParams();
 const {activeSong, isPlaying}=useSelector((state) => state.player);
 const {data: songData, isFetching:isFetchingSongDetails}= useGetSongDetailsQuery({songid});
 const { data, isFetching: isFetchinRelatedSongs, error } = useGetSongRelatedQuery({ songid });

const handlePauseClick = () => {
      dispatch(playPause(false));
    };
    
    const handlePlayClick = (song,i) => {
      dispatch(setActiveSong({ song, data, i }));
      dispatch(playPause(true));
    };

 if (isFetchingSongDetails && isFetchinRelatedSongs) return <Loader title="Searching song details" />;

  console.log(songData);

  if (error) return <Error />;


 const songId = songData?.data[0]?.id;
 const lyricId = songData?.resources?.['shazam-songs']?.[songId]?.relationships?.lyrics?.data[0]?.id;
 const lyric = songData?.resources?.lyrics?.[lyricId]?.attributes?.text; 

 return (
 <div className="flex flex-col">
     <DetailsHeader artistId="" songData={songData}/>
    <div className="mb-10">
        <h2 className="text-purple-200 text-3xl font-bold">
            Lyrics:
        </h2>
        <div className="mt-5"> 
          {lyricId
            ? lyric.map((Line, i) => (
              <p key={`lyrics-${Line}-${i}`} className="text-purple-300 text-base my-1">{Line}</p>
            ))
            : 
              <p className="text-yellow-400 text-base my-1">Sorry, No lyrics found!</p>
            }
        </div>
    </div>
     <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
        />
 </div>
 ) ;
};

export default SongDetails;


