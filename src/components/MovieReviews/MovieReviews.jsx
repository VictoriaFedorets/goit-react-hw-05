import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../themoviedb_api/themoviedb_api";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  // const endPoint = `movie/${id}/reviews`;

  useEffect(() => {
    const getReviews = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <div className={css.reviews}>
      <h2>Movie reviews</h2>
      {loading && <div>Loading reviews...</div>}
      {error && <div>This is Error</div>}
      {reviews.length > 0 ? (
        <ul className={css.reviewsList}>
          {reviews.map(({ id, content, author }) => {
            return (
              <li key={id}>
                <p>
                  <span>Name : </span>
                  {author}
                </p>
                <p>
                  <span>Review :</span> {content}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>Sorry, there are no reviews for this movie yet</h3>
      )}
    </div>
  );
}
