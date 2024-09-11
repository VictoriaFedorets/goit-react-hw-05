import { FiSearch } from "react-icons/fi";
import { useState } from "react";

export default function SearchForm({ onSubmit }) {
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.searchingFilms.value.trim();

    if (value === "") {
      setError("Please, input value for search");
      return;
    }
    setError("");
    onSubmit(value);
    form.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchingFilms" className="sr-only">
          Search for movies
        </label>
        <input
          type="text"
          id="searchingFilms"
          name="searchingFilms"
          autoComplete="off"
          placeholder="Enter movie title"
          aria-describedby="searchError"
        />
        <button type="submit" aria-label="Search">
          <FiSearch />
          Search
        </button>
      </form>

      {error && (
        <p id="searchError" style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
}
