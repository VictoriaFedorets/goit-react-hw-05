import { useEffect, useRef, useState } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../themoviedb_api/themoviedb_api";
import CurrentFilm from "../../components/CurrentFilm/CurrentFilm";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  // console.log(movieId);
  // const endpoint = `/movie/${movieId}`;

  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/");
  // console.log(backLinkHref);

  const [currentFilm, setCurrentFilm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // console.log("Current location is", location);
    // console.log("Movie ID:", movieId);

    const getFilmDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getMovieDetails(movieId);
        setCurrentFilm(response);
        // console.log(currentFilm);
      } catch (err) {
        setError("Movie data could not be retrieved. Please try again later.");
        console.error("Error fetching film details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      getFilmDetails();
    }
  }, [movieId]);

  return (
    <div className={css.movieDetails}>
      <div className={css.goBack}>
        <Link to={backLinkHref.current}>Go back</Link>
      </div>

      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
      {currentFilm && <CurrentFilm currentFilm={currentFilm} />}

      <ul className={css.castReviews}>
        <li className={css.castReviewsItems}>
          <Link to="cast">Cast</Link>
        </li>
        <li className={css.castReviewsItems}>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
