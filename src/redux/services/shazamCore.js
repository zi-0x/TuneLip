import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
    
  export const shazamCoreApi= createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=> {
            headers.set('x-rapidapi-key', 'bacd03dbe8mshd1d9ef7a40bb44cp1e0ad4jsn1feac250ba3b');
            headers.set('x-rapidapi-host', 'shazam-core.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) =>({
      getTopCharts: builder.query({ query: () => '/charts/world?country_code=DZ' }),
      getSongDetails: builder.query({ query: ({songid}) => `/tracks/details?track_id=${songid}` }),
    }),
  });

  export const { 
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
  } = shazamCoreApi;