import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ listFilms }) {
  const location = useLocation();
  const defaultImg =
    "https://th.bing.com/th/id/OIP.V2MX8j99r1WmRDZ0UkRBegHaJe?rs=1&pid=ImgDetMain";

  if (!Array.isArray(listFilms)) {
    return <p>Error: Expected listFilms to be an array.</p>;
  }

  return (
    <ul className={css.movieList}>
      {listFilms.map(film => (
        <li className={css.movieItem} key={film.id}>
          <Link to={`/movies/${film.id}`} state={location}>
            <img
              className={css.img}
              src={
                film.poster_path
                  ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                  : defaultImg
              }
              alt={film.title}
            />
            <h5>{film.title}</h5>
          </Link>
        </li>
      ))}
    </ul>
  );
}
