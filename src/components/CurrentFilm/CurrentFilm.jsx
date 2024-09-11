export default function CurrentFilm({ data }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
      />
      <h1>{data.title}</h1>
      <p>
        <span>Overview:</span> {data.overview}
      </p>
      <p>
        <span>Release date :</span> {data.release_date}
      </p>
      <p>
        <span>Average number of votes:</span> {data.vote_average}
      </p>
      <p>
        <span>Genres:</span> {data.genres.map(genre => genre.name).join(", ")}
      </p>
      <p>
        <span>Country of origin:</span> {data.origin_country.join(", ")}
      </p>
    </div>
  );
}
