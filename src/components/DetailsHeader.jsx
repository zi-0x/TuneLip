import {Link} from 'react-router-dom';


const DetailsHeader = ({artistId, artistData, songData}) => {
const artist= artistData?.artists[artistId]?.attributes
console.log(artistId, artistData, songData, artist);
const songId = songData?.data[0]?.id || songData?.id;


  return (
  <div className='relative w-full flex flex-col'>
    <div className='w-full bg-gradient-to-l from-transparent to-yellow-400  rounded-tl-[100px]  rounded-bl-[100px] sm:h-48 h-28'>
      <div className='absolute inset-0 flex items-center'>
        <img src={artistId ? artist.artwork?.url.replace('{w}', '125').replace('{h}', '125') : songData?.resources?.['shazam-songs']?.[songId]?.attributes?.artwork?.url} alt="art" className='sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black'/>
        <div className='ml-5'>
          <p className="font-bold sm:text-3xl text-xl text-purple-200">
             {artistId ? artist?.name : songData?.resources?.['shazam-songs']?.[songId]?.attributes?.title}
          </p>
          {!artistId && (
          <Link to={`/artists/${songData?.relationships?.data?.artists[0]?.id}`}>
            <p className="text-base text-purple-300 mt-2">{songData?.resources?.['shazam-songs']?.[songId]?.attributes?.artist}</p>
          </Link>
          )}

          <p className="text-base text-purple-300 mt-2">
            {artistId 
              ? artist?.genreNames?.[0] 
              : songData?.resources?.['shazam-songs']?.[songId]?.attributes?.genres.primary || 'No Genre'
              }
             
          </p>     
        
        </div>
      </div>
    </div>
    
  </div>
  
)
};

export default DetailsHeader;

