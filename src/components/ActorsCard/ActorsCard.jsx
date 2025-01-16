import css from "./ActorsCard.module.css";

export default function ActorsCard({ cast }) {
  const { cast_id, profile_path, name, character, popularity } = cast;
  const defaultImg =
    "https://chadjohnsonlaw.com/wp-content/uploads/2019/03/photo-not-available-male.jpg";

  return (
    <li className={css.actorItem} key={cast_id}>
      <img
        className={css.actorImg}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : defaultImg
        }
        alt={`Photo of${name}`}
        width={150}
      />
      <div className={css.actorInfo}>
        <p>Name: {name}</p>
        <p>Character: {character}</p>
        <p>Popularity: {popularity}</p>
      </div>
    </li>
  );
}
