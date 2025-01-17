import { FaStar } from "react-icons/fa";
import css from "./CurrentFilm.module.css";

export default function CurrentFilm({ currentFilm }) {
  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

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
