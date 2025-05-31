import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
    
  export const shazamCoreApi= createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=> {
            headers.set('x-rapidapi-key', '3242e1cae5msh97504f23e82624bp1a90fbjsn8eb5b1ee6a70');
            headers.set('x-rapidapi-host', 'shazam-core.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) =>({
      getTopCharts: builder.query({ query: () => '/charts/world?country_code=DZ' }),
    }),
  });

  export const { 
    useGetTopChartsQuery,
  } = shazamCoreApi;