import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActorsCard from "../ActorsCard/ActorsCard";
import { getMovieCast } from "../../themoviedb_api/themoviedb_api";
import css from "./MovieCast.module.css";
import Loader from "../Loader/Loader";

export default function MovieCast() {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  // console.log(movieId);

  const getFilmCasts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await getMovieCast(movieId);

      setCasts(response.cast);
      // console.log(response.cast);
    } catch (error) {
      setError(
        "It was not possible to obtain information about the actors. Please try again later."
      );
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getFilmCasts();
  }, [movieId]);

  return (
    <>
      <h2 className={css.title}>Movie casts:</h2>
      {loading && <Loader />}
      {error && <div>Oops.. It is error..</div>}

      {casts.length > 0 ? (
        <ul className={css.actorList}>
          {casts.map(cast => (
            <ActorsCard cast={cast} key={cast.id} />
          ))}
        </ul>
      ) : (
        <h2>Sorry, there is no information about actors</h2>
      )}
    </>
  );
}
