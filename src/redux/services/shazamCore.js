import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
    
  export const shazamCoreApi= createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com',
        prepareHeaders:(headers)=> {
            headers.set('x-rapidapi-key', 'bef53b48f2msh122692ba49d8576p1b1a10jsn464e875f5422');
            headers.set('x-rapidapi-host', 'shazam-core.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) =>({
      getTopCharts: builder.query({ query: () => '/v1/charts/world?country_code=DZ' }),
      getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
      getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
      getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
      getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
      getSongDetails: builder.query({ query: ({songid}) => `/v2/tracks/details?track_id=${songid}` }),
      getSongRelated: builder.query({ query: ({songid}) => `/v1/tracks/related?track_id=${songid}` }),
    }),
  });

  export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
