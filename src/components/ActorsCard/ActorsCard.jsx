export default function ActorsCard({ cast }) {
  return (
    <ul>
      {cast.map(({ cast_id, profile_path, name, character, popularity }) => (
        <li key={cast_id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : "http://dummyimage.com/150x200/c4c4c8/646cff.gif&text=The+image!"
            }
            alt={`Photo of${name}`}
          />
          <p>Name : {name}</p>
          <p>Character : {character}</p>
          <p>Popularity : {popularity}</p>
        </li>
      ))}
    </ul>
  );
}
