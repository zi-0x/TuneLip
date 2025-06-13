import React from 'react';
import{ useDispatch, useSelector }from 'react-redux';

import {Error, Loader, SongCard} from '../components';
import {genres} from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const dispatch=useDispatch();
  const{ activeSong, isPlaying}= useSelector((state) => state.player );
    const { data , isFetching, error } = useGetTopChartsQuery();
    const genreTitle='Pop';
   
    if (isFetching) return <Loader title="Loading songs..."/>;
console.log(data);
    if (error) return <Error />;
  
    return(
      <div className="flex flex-col">
        <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
          <h2 className="font-bold text-3xl text-purple-200 text-left">Discover {genreTitle}</h2>
          <select
            onChange={()=>{}}
            value=""
            className="bg-purple-200 text-fuchsia-800 p-3 text-xl font-bold rounded-lg outline-none sm:mt-0 mt-5 hover:bg-gradient-to-tl from-yellow-300  to-purple-400"
            >
             {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title} </option>)}
          </select>
           </div>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {data?.map((song,i)=>(
                <SongCard
                key={song.id}
                song={song}
                isPlaying= {isPlaying}
                activeSong={activeSong}
                data={data}
                i={i}
                />
            ))}
        </div>
      </div>
    );
};


export default Discover;
