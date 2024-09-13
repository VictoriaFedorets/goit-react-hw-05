import css from "./ActorsCard.module.css";

export default function ActorsCard({ cast }) {
  const { cast_id, profile_path, name, character, popularity } = cast;
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
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
      <p>Name : {name}</p>
      <p>Character : {character}</p>
      <p>Popularity : {popularity}</p>
    </li>
  );
}
