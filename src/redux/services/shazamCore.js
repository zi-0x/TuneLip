import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
    
  export const shazamCoreApi= createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com',
        prepareHeaders:(headers)=> {
            headers.set('x-rapidapi-key', '14a8bf37d8msh93da1806169a17cp1d0c5ejsn6353f1c678d1');
            headers.set('x-rapidapi-host', 'shazam-core.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) =>({
      getTopCharts: builder.query({ query: () => '/v1/charts/world?country_code=DZ' }),
      getSongDetails: builder.query({ query: ({songid}) => `/v2/tracks/details?track_id=${songid}` }),
      getSongRelated: builder.query({ query: ({songid}) => `/tracks/related?track_id=${songid}` }),
    }),
  });

  export const { 
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
  } = shazamCoreApi;
