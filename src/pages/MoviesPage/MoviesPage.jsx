import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import fetchData from "../../themoviedb_api/themoviedb_api";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import LoadMore from "../../components/LoadMore/LoadMore";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(1); // Состояние для текущей страницы
  const [totalPages, setTotalPages] = useState(1); // Состояние для общего количества страниц

  const endpoint = "search/movie";
  const query = searchParams.get("query") ?? "";

  const pageOnParams = Number(searchParams.get("page"));
  const page = pageOnParams ? pageOnParams : 1;

  function changePage(page, change, query) {
    setSearchParams({ query: query, page: page + change });
  }

  function resetPage(page, change, query) {
    setSearchParams({ query: query, page: 1 });
  }

  function setParams(value) {
    setSearchParams({ query: value.toLowerCase(), page: 1 });
  }

  useEffect(() => {
    if (!query) {
      return;
    }

    const getFilmSearch = async query => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetchData(page, query, endpoint);
        if (response.results.length === 0) {
          return "😈 There is not matched movie, please, try other one";
        }
        setMovies(response.results);
        setTotalPages(response.total_pages);
      } catch {
        setError("Не удалось получить данные. Пожалуйста, попробуйте позже.");
      } finally {
        setLoading(false);
      }
    };
    getFilmSearch(query);
  }, [query, page]);

  return (
    <div>
      <h3>Movies search page</h3>
      <SearchForm onSubmit={setParams} />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movies.length > 0 && <MovieList movies={movies} />}
      {page > 1 && (
        <LoadMore onClick={changePage} change={-1} page={page} query={query}>
          Previos page
        </LoadMore>
      )}
      {totalPages > 1 && <LoadMore page={page}>{page}</LoadMore>}
      {page < totalPages && (
        <LoadMore onClick={changePage} change={1} page={page} query={query}>
          Next page
        </LoadMore>
      )}
      {page !== 1 && (
        <LoadMore onClick={resetPage} page={page} change={0} query={query}>
          Reset page
        </LoadMore>
      )}
    </div>
  );
}
