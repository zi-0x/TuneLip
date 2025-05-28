import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
    
  export const shazamCoreApi= createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1/',
        prepareHeaders:(headers)=> {
            headers.set('x-rapidapi-key', 'd3f8355a50msh3ac8d4a16739a14p187ad5jsn8fb7f7240878');
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