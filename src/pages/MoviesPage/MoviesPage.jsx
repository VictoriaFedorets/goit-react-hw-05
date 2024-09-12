import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import { getSearchMovies } from "../../themoviedb_api/themoviedb_api";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import LoadMore from "../../components/LoadMore/LoadMore";

import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(1); // Состояние для текущей страницы
  const [totalPages, setTotalPages] = useState(1); // Состояние для общего количества страниц

  // const endpoint = "search/movie";
  const query = searchParams.get("query") ?? "";

  // const pageOnParams = Number(searchParams.get("page"));
  // const page = pageOnParams ? pageOnParams : 1;
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

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

  const updateSearchParams = newParams => {
    setSearchParams({
      query: newParams.query.toLowerCase(),
      page: newParams.page,
    });
  };

  const handlePageChange = change => {
    updateSearchParams({ query, page: page + change });
  };

  const handleResetPage = () => {
    updateSearchParams({ query, page: 1 });
  };

  const handleSearchSubmit = newQuery => {
    updateSearchParams({ query: newQuery, page: 1 });
  };

  return (
    <div className={css.searchPage}>
      <h3>Movies search page</h3>
      <SearchForm onSubmit={handleSearchSubmit} />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {searchMovies.length > 0 && <MovieList listFilms={searchMovies} />}
      <div>
        {" "}
        {page > 1 && (
          <LoadMore onClick={() => handlePageChange(-1)}>
            Previous Page
          </LoadMore>
        )}
        {page < totalPages && (
          <LoadMore onClick={() => handlePageChange(1)}>Next Page</LoadMore>
        )}
        {page !== 1 && (
          <LoadMore onClick={handleResetPage}>Reset Page</LoadMore>
        )}
      </div>
    </div>
  );
}
