import { Link, useLocation } from "react-router-dom";

export default function MovieList({ listFilms }) {
  const location = useLocation();
  // console.log(location);

  if (!Array.isArray(listFilms)) {
    return <p>Error: Expected listFilms to be an array.</p>;
  }
  return (
    <ul>
      {listFilms.map(film => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`} state={location}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
