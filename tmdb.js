// const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWFkOGFhZjUxM2E5ZmM0Y2RlMDM0ZDlhNDk0NDE3NyIsIm5iZiI6MTczMTk5NDM1MC4zNDYyMzc3LCJzdWIiOiI2M2Y5OGUyOTZhYThlMDAwYzYyYmRkNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6aHCemR_DtaGd6prjNwXw-Q3fwcKhzOcB-jvEtlAfbQ'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));

// fetch(url)
// .then(response => response.json())
// .then(data => {
//   console.log(data.genres);
// })
// .catch(error => console.error('Error:', error));

//now_palaying
// const url =
//   "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWFkOGFhZjUxM2E5ZmM0Y2RlMDM0ZDlhNDk0NDE3NyIsIm5iZiI6MTczMTk5NDM1MC4zNDYyMzc3LCJzdWIiOiI2M2Y5OGUyOTZhYThlMDAwYzYyYmRkNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6aHCemR_DtaGd6prjNwXw-Q3fwcKhzOcB-jvEtlAfbQ",
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));

//popular
// const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWFkOGFhZjUxM2E5ZmM0Y2RlMDM0ZDlhNDk0NDE3NyIsIm5iZiI6MTczMTk5NDM1MC4zNDYyMzc3LCJzdWIiOiI2M2Y5OGUyOTZhYThlMDAwYzYyYmRkNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6aHCemR_DtaGd6prjNwXw-Q3fwcKhzOcB-jvEtlAfbQ",
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));

//top-rated
const url =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWFkOGFhZjUxM2E5ZmM0Y2RlMDM0ZDlhNDk0NDE3NyIsIm5iZiI6MTczMTk5NDM1MC4zNDYyMzc3LCJzdWIiOiI2M2Y5OGUyOTZhYThlMDAwYzYyYmRkNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6aHCemR_DtaGd6prjNwXw-Q3fwcKhzOcB-jvEtlAfbQ",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err));
