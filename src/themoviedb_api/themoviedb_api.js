import axios from "axios";

// "/trending/movie/day" Trending movies - список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// "/search/movie" Search movie - пошук фільму за ключовим словом на сторінці фільмів.
// "/movie/{movie_id}" Movie details - запит повної інформації про фільм для сторінки кінофільму.
// "/movie/{movie_id}/credits" Movie credits - запит інформації про акторський склад для сторінки кінофільму.
// "/movie/{movie_id}/reviews" Movie reviews - запит оглядів для сторінки кінофільму.

// const API_KEY = "0f3dd7080d4a74d09bbcbfa48fa84e42";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjNkZDcwODBkNGE3NGQwOWJiY2JmYTQ4ZmE4NGU0MiIsIm5iZiI6MTcyNTQ4MzgwNC4xNDI5MzgsInN1YiI6IjY2ZDhjNzBjYmNmYTMxODg2MTlkMzY0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HTo4xLg5qUV6gh2bkHSXNgw-tJkbfScvCrIrQ_UaL7I";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_TOKEN}`;

export async function getTopMovieDay() {
  const endPoint = "/trending/movie/day";
  const response = await axios.get(endPoint);
  console.log(response.data);
  return response.data;
}

export async function getSearchMovies(query) {
  const endPoint = "/search/movie";
  const params = {
    query: query,
  };

  const response = await axios.get(endPoint, { params });

  return response.data;
}

export async function getMovieDetails(movie_id) {
  const endPoint = `/movie/${movie_id}`;

  const response = await axios.get(endPoint);

  return response.data;
}

export async function getMovieCast(movie_id) {
  const endPoint = `/movie/${movie_id}/credits`;

  const response = await axios.get(endPoint);

  return response.data;
}

export async function getMovieReviews(movie_id) {
  const endPoint = `/movie/${movie_id}/reviews`;

  const response = await axios.get(endPoint);

  return response.data;
}
