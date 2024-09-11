import axios from "axios";

const API_KEY = "0f3dd7080d4a74d09bbcbfa48fa84e42";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjNkZDcwODBkNGE3NGQwOWJiY2JmYTQ4ZmE4NGU0MiIsIm5iZiI6MTcyNTQ4MzgwNC4xNDI5MzgsInN1YiI6IjY2ZDhjNzBjYmNmYTMxODg2MTlkMzY0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HTo4xLg5qUV6gh2bkHSXNgw-tJkbfScvCrIrQ_UaL7I";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_TOKEN}`;

export default async function fetchData(page = 1, query = "", endPoint) {
  const params = {
    page,
    query,
    api_key: API_KEY,
  };
  const response = await axios.get(`${endPoint}`, { params });
  console.log(response.data);
  return response.data;
}
