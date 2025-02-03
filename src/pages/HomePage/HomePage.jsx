import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getTopMovieDay } from "../../themoviedb_api/themoviedb_api";
import Loader from "../../components/Loader/Loader";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [listFilms, setListFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTopFilms = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getTopMovieDay();
        setListFilms([...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getTopFilms();
  }, []);

  return (
    <>
      <h1 className={css.title}>Trendings today</h1>
      {loading && <Loader />}
      {error && <p>Oops... It is error....</p>}
      {listFilms.length > 0 && <MovieList listFilms={listFilms} />}
    </>
  );
}
