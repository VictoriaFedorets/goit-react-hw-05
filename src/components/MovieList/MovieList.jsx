import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ listFilms }) {
  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";
  const location = useLocation();
  // console.log(location);
  console.log(listFilms);
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
