import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ActorsCard from "../ActorsCard/ActorsCard";
import { getMovieCast } from "../../themoviedb_api/themoviedb_api";

export default function MovieCast() {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  console.log(movieId);
  // const endpoint = `/movie/${movieId}/credits`;

  // const location = useLocation();
  // console.log("cast location", location);

  const getFilmCasts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await getMovieCast(movieId);

      setCasts(response.cast);
      console.log(response.cast);
    } catch (error) {
      setError(
        "It was not possible to obtain information about the actors. Please try again later."
      );
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // console.log("Current location is", location);
    // console.log(movieId);
    getFilmCasts();
    console.log(casts);
  }, [movieId]);

  return (
    <div>
      <h1>Movie casts:</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Oops.. It is error..</div>}

      {casts.length > 0 ? (
        <ActorsCard cast={casts} key={casts.id} />
      ) : (
        <h2>Sorry, there is no information about actors</h2>
      )}
    </div>
  );
}
