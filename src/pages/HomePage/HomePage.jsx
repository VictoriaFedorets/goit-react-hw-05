import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { getTopMovieDay } from "../../themoviedb_api/themoviedb_api";
import LoadMore from "../../components/LoadMore/LoadMore";
import Loader from "../../components/Loader/Loader";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [listFilms, setListFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [totalPages, setTotalPages] = useState(1);

  // const [searchParams, setSearchParams] = useSearchParams();

  // const pageOnParams = Number(searchParams.get("page"));
  // const [page, setPage] = useState(() => (pageOnParams ? pageOnParams : 1));

  // function changePage(page, change) {
  //   setPage(page + change);
  // }
  // function resetPage() {
  //   setPage(1);
  // }
  // const endPoint = "trending/movie/day";

  useEffect(() => {
    const getTopFilms = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getTopMovieDay();

        // setSearchParams({ page: page });
        setListFilms([...data.results]); // Assuming 'results' contains the list of films
        // setTotalPages(data.total_pages); // Update total pages if applicable
      } catch (error) {
        setError(true);
        // console.log(error);
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

      {/* <div className={css.btnWrap}>
        {page > 1 && (
          <LoadMore onClick={changePage} change={-1} page={page}>
            Previos page
          </LoadMore>
        )}
        {listFilms.length > 0 && <LoadMore page={page}>{page}</LoadMore>}
        {page < totalPages && (
          <LoadMore onClick={changePage} change={1} page={page}>
            Next page
          </LoadMore>
        )}
        {page !== 1 && <LoadMore onClick={resetPage}>Reset page</LoadMore>}
      </div> */}
    </>
  );
}
