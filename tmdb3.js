// Define the base URL and categories
const BASE_URL = "https://api.themoviedb.org/3/movie";
const path = "/now_playing";
const params = new URLSearchParams({
  api_key: "3aad8aaf513a9fc4cde034d9a4944177",
  language: "ko",
  region: "대한민국",
});

const categories = {
  nowPlaying: "now_playing",
  popular: "popular",
  topRated: "top_rated",
};

function main() {
  const movies = getNowPlayingMovies();
}

async function getNowPlayingMovies() {
  let URL = `${baseURL}${path}${params}`;
  const response = await fetch(URL);
  const data = await Response.json();
  const movies = data.results;
  const title = data.results.title;
  const images = data.results.poster_path;

  movies.forEach((movie) => {});
}

getNowPlayingMovies();
