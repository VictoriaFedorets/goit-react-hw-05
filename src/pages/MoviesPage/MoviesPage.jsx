import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovies } from "../../themoviedb_api/themoviedb_api";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import LoadMore from "../../components/LoadMore/LoadMore";
import Loader from "../../components/Loader/Loader";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";
  const page = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await getSearchMovies(query, page);
        if (response.results.length === 0) {
          setError("😈 No matched movies, please try another search.");
          setSearchMovies([]);
        } else {
          setSearchMovies(response.results);
          setTotalPages(response.total_pages);
        }
      } catch {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query, page]);

  const updateSearchParams = (newQuery, newPage) => {
    const params = {};
    if (newQuery) params.query = newQuery.toLowerCase();
    if (newPage) params.page = newPage;
    setSearchParams(params);
  };

  const handlePageChange = change => {
    updateSearchParams(query, page + change);
  };

  const handleSearchSubmit = newQuery => {
    updateSearchParams(newQuery, 1);
  };

  return (
    <div className={css.searchPage}>
      <h3 className={css.title}>Movies search page</h3>
      <SearchForm onSubmit={handleSearchSubmit} />
      {loading && <Loader />}
      {error && <div className={css.error}>{error}</div>}

      {searchMovies.length > 0 && <MovieList listFilms={searchMovies} />}

      <div className={css.btnWrap}>
        {page > 1 && searchMovies.length > 0 && (
          <LoadMore onClick={() => handlePageChange(-1)}>
            Previous Page
          </LoadMore>
        )}
        {page > 1 && page < totalPages && searchMovies.length > 0 && (
          <LoadMore page={page}>{page}</LoadMore>
        )}
        {page < totalPages && searchMovies.length > 0 && (
          <LoadMore onClick={() => handlePageChange(1)}>Next Page</LoadMore>
        )}
      </div>
    </div>
  );
}
