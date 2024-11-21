import axios from 'axios';
import React from 'react'

export default function MovieList() {
  
  
async function getTmdbData() {
//   //top-rated
//   const url= "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
//   const response=await axios.get(url);
//   // const data=response.data
//   const data=response.datasetPosts(data)
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWFkOGFhZjUxM2E5ZmM0Y2RlMDM0ZDlhNDk0NDE3NyIsIm5iZiI6MTczMTk5NDM1MC4zNDYyMzc3LCJzdWIiOiI2M2Y5OGUyOTZhYThlMDAwYzYyYmRkNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6aHCemR_DtaGd6prjNwXw-Q3fwcKhzOcB-jvEtlAfbQ",
//     },
//   };
// }
  const data = [   {
    adult: false,
    backdrop_path: '/7TF4p86ZafnxFuNqWdhpHXFO244.jpg',
    genre_ids: [Array],
    id: 769,
    original_language: 'en',
    original_title: 'GoodFellas',
    overview: 'The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.',
    popularity: 67.308,
    poster_path: '/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
    release_date: '1990-09-12',
    title: 'GoodFellas',
    video: false,
    vote_average: 8.5,
    vote_count: 12847
  },
  {
    adult: false,
    backdrop_path: '/gwj4R8Uy1GwejKqfofREKI9Jh7L.jpg',
    genre_ids: [Array],
    id: 12477,
    original_language: 'ja',
    original_title: '火垂るの墓',
    overview: 'In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.',
    popularity: 0.049,
    poster_path: '/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg',
    release_date: '1988-04-16',
    title: 'Grave of the Fireflies',
    video: false,
    vote_average: 8.456,
    vote_count: 5553
  },
  {
    adult: false,
    backdrop_path: '/7lyq8hK0MhPHpUXdnqbFvZYSfkk.jpg',
    genre_ids: [Array],
    id: 11216,
    original_language: 'it',
    original_title: 'Nuovo Cinema Paradiso',
    overview: "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
    popularity: 40.236,
    poster_path: '/gCI2AeMV4IHSewhJkzsur5MEp6R.jpg',
    release_date: '1988-11-17',
    title: 'Cinema Paradiso',
    video: false,
total_results: 9748
}]
  return (
  <div>TmdbList</div>
  )
}
