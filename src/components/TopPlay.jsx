import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom' ;
import { useSelector, useDispatch } from 'react-redux' ;
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode as FreeModeModule } from 'swiper/modules';
  
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopPlayCard=({song,i, isPlaying, activeSong, handlePauseClick, handlePlayClick})=>(   
  <div className="w-full  flex flex-row items-center   py-2 p-4 rounded-lg cursor-pointer mb-2 ">
    <h3 className="font-bold text-base text-purple-200 mr-3">{i+1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img className="w-10 h-10 rounded-lg" src={song?.hub?.image || song?.attributes?.artwork?.url}/>
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/songs/${song.id}`}>
         <p className="text-md font-bold text-purple-200 hover:underline ">{song?.attributes?.name}</p>
        </Link>
        <Link to={`/artists/${song.artists?.data[0]?.id}`}>
         <p className="text-base text-purple-200 hover:text-yellow-500 hover:underline mt-1">{song?.attributes?.artistName}</p>
        </Link>
      </div>
    </div>
    <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handLePause={handlePauseClick}
            handLePlay={handlePlayClick}
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } =useSelector((state) =>state.player);
  const {data} = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(() =>{
    divRef.current.scrollIntoView({ behavior: 'smooth'});
  });

 const topPlays = data?.slice(0,5);

  const handlePauseClick = () => {
      dispatch(playPause(false));
    };
    
    const handlePlayClick = (song,i) => {
      dispatch(setActiveSong({ song, data, i }));
      dispatch(playPause(true));
    };

    return(
      
      <div ref ={divRef} className=" xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 ] xl:max-w-[500px] max-w-full flex flex-col">
        <div className="w-full flex flex-col"> 
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-purple-200 font-bold text-2xl">Top Charts</h2>
            <Link to="/top-charts">
              <p className="text-purple-200 text-base cursor-pointer hover:text-yellow-500 ">See More</p>
            </Link>
          </div>
          <div className="mt-4 flex flex-col gap-1">
             {topPlays?.map((song, i) => (
             <TopPlayCard
               key={song.id}
               song={song}
               i={i}
               isPlaying={isPlaying}
               activeSong={activeSong}
               handlePauseClick={handlePauseClick}
               handlePlayClick={() => handlePlayClick(song,i)}
             />
             ))}
          </div>
      </div>
       <div className="w-full flex flex-col mt-8 ">
           <div className="flex flex-row justify-between items-center">
            <h2 className="text-purple-200 font-bold text-2xl">Top Artists</h2>
            <Link to="/top-artists">
              <p className="text-purple-200 text-base cursor-pointer hover:text-yellow-500 ">See More</p>
            </Link>
          </div>

      <Swiper 
        slidesPerView="auto"
        spaceBetween={15}
        freeMode={true}
        modules={[FreeModeModule]}
        className="mt-4"
        
      >
         {topPlays?.map((song,i)=>(
         <SwiperSlide
          key={song?.id}
          style={{width:'25%', height:'auto' }}
          className="shadow-lg rounded-full animate-slideright"
          >
      
        <Link to={`/artists/${song?.relationships?.artists?.data[0]?.id}`}>
        <img src={song?.hub?.image || song?.attributes?.artwork?.url} alt="artist name" className="rounded-full w-full object-cover"/>
        </Link>
          </SwiperSlide> 
         ))}
      </Swiper>

       </div>

          </div>

    );
}; 

export default TopPlay;