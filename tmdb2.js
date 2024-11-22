// Define the base URL and categories
const BASE_URL = "https://api.themoviedb.org/3/movie";

const categories = {
  nowPlaying: "now_playing",
  popular: "popular",
  topRated: "top_rated",
};

// Common options object for all requests
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWFkOGFhZjUxM2E5ZmM0Y2RlMDM0ZDlhNDk0NDE3NyIsIm5iZiI6MTczMTk5NDM1MC4zNDYyMzc3LCJzdWIiOiI2M2Y5OGUyOTZhYThlMDAwYzYyYmRkNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6aHCemR_DtaGd6prjNwXw-Q3fwcKhzOcB-jvEtlAfbQ",
  },
};

// Function to fetch movies by category
const fetchMoviesByCategory = async (category) => {
  const url = `${BASE_URL}/${category}?language=en-US&page=1`;
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${category} movies:`, error);
    return null;
  }
};

// Fetch all categories
const getAllMovies = async () => {
  const moviesByCategory = {};

  // Using Object.entries to iterate over categories
  await Promise.all(
    Object.entries(categories).map(async ([key, value]) => {
      moviesByCategory[key] = await fetchMoviesByCategory(value);
    })
  );

  return moviesByCategory;
};

// Usage example
getAllMovies().then((movies) => {
  // Access different categories
  const { nowPlaying, popular, topRated } = movies;

  // Process each category as needed
  Object.keys(movies).forEach((category) => {
    console.log(`${category} movies:`, movies[category].results);
  });
});
