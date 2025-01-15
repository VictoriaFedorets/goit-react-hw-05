import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ listFilms }) {
  const location = useLocation();
  // console.log(location);

  if (!Array.isArray(listFilms)) {
    return <p>Error: Expected listFilms to be an array.</p>;
  }

  return (
    <ul className={css.movieList}>
      {listFilms.map(film => (
        <li className={css.movieItem} key={film.id}>
          <Link to={`/movies/${film.id}`} state={location}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
