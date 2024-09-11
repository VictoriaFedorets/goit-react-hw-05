import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ActorsCard from "../ActorsCard/ActorsCard";
import fetchData from "../../themoviedb_api/themoviedb_api";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  console.log(movieId);
  const endpoint = `/movie/${movieId}/credits`;

  // const location = useLocation();
  // console.log("cast location", location);

  useEffect(() => {
    // console.log("Current location is", location);
    // console.log(movieId);

    const getFilmCasts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetchData(1, "", endpoint);

        setCast(response.cast || []);
        console.log(response.cast);
      } catch (error) {
        setError(
          "Не удалось получить информацию об актерах. Пожалуйста, повторите попытку позже."
        );
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getFilmCasts();
  }, [movieId, endpoint]);

  console.log(cast);

  return (
    <div>
      <h1>Movie casts:</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Oops.. It is error..</div>}

      {cast.length > 0 ? (
        <ActorsCard cast={cast} />
      ) : (
        <h2>Sorry, there is no information about actors</h2>
      )}
    </div>
  );
}
