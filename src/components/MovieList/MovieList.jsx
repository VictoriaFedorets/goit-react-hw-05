import { Link, useLocation } from "react-router-dom";

export default function MovieList({ listFilms = [] }) {
  const location = useLocation();
  if (!Array.isArray(listFilms)) {
    return <p>Error: Expected listFilms to be an array.</p>;
  }
  return (
    <ul>
      {listFilms.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={location}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
