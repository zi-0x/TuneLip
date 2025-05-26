 import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
    
  export const shazamCoreApi= createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=> {
            headers.set('x-rapidapi-key', '02611b6d24mshd32505fbc25f2fap192ed1jsn954321a4cc43');
            return headers;
        },
    }),
    endpoints: (builder) =>({
      getTopCharts: builder.query({ query: () => '/charts/world' }),
    }),
  });

  export const { 
    useGetTopChartsQuery,
  } = shazamCoreApi;