import { useEffect, useRef, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import fetchData from "../../themoviedb_api/themoviedb_api";
import CurrentFilm from "../../components/CurrentFilm/CurrentFilm";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const endpoint = `/movie/${movieId}`;

  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/");

  const [currentFilm, setCurrentFilm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Current location is", location);
    console.log("Movie ID:", movieId);

    const getFilmDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetchData(1, "", endpoint);
        setCurrentFilm(response);
      } catch (err) {
        setError(
          "Не удалось получить данные о фильме. Пожалуйста, повторите попытку позже."
        );
        console.error("Error fetching film details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      getFilmDetails();
    }
  }, [movieId, endpoint, location]);

  return (
    <div>
      <Link to={backLinkHref.current}>Go back</Link>
      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
      {currentFilm && <CurrentFilm data={currentFilm} />}

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
}
