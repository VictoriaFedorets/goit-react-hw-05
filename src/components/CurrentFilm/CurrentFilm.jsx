export default function CurrentFilm({ currentFilm }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${currentFilm.poster_path}`}
        alt={currentFilm.title}
      />
      <h1>{currentFilm.title}</h1>
      <p>
        <span>Overview:</span> {currentFilm.overview}
      </p>
      <p>
        <span>Release date :</span> {currentFilm.release_date}
      </p>
      <p>
        <span>User Score:</span> {currentFilm.vote_average}
      </p>
      <p>
        <span>Genres:</span>{" "}
        {currentFilm.genres.map(genre => genre.name).join(", ")}
      </p>
      <p>
        <span>Country of origin:</span> {currentFilm.origin_country.join(", ")}
      </p>
    </div>
  );
}
