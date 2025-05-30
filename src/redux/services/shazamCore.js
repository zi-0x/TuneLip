import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
    
  export const shazamCoreApi= createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=> {
            headers.set('x-rapidapi-key', '1a1188c7e8mshc9c8ef5abb05f38p1a3b21jsncf9fdcd77372');
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