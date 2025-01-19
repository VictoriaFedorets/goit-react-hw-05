import { FaStar } from "react-icons/fa";
import css from "./CurrentFilm.module.css";

export default function CurrentFilm({ currentFilm }) {
  const defaultImg =
    "https://th.bing.com/th/id/OIP.V2MX8j99r1WmRDZ0UkRBegHaJe?rs=1&pid=ImgDetMain";

  return (
    <div className={css.currentFilm}>
      <img
        className={css.img}
        src={
          currentFilm.poster_path
            ? `https://image.tmdb.org/t/p/w500${currentFilm.poster_path}`
            : defaultImg
        }
        width={500}
        alt={currentFilm.title}
      />
      <div className={css.filmContent}>
        <h2>{currentFilm.title}</h2>
        <p>
          <span>Overview: </span> {currentFilm.overview}
        </p>
        <p>
          <span>Release date: </span> {currentFilm.release_date}
        </p>
        <p>
          <span>User Score: </span> {currentFilm.vote_average}
          <FaStar className={css.iconStar} />
        </p>
        <p>
          <span>Genres: </span>{" "}
          {currentFilm.genres.map(genre => genre.name).join(", ")}
        </p>
        <p>
          <span>Country of origin: </span>{" "}
          {currentFilm.origin_country.join(", ")}
        </p>
      </div>
    </div>
  );
}
