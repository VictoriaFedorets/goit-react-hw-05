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
        <input
          type="text"
          name="searchingFilms"
          autoComplete="off"
          placeholder="Movies title"
        />
        <button type="submit">
          <FiSearch />
          Search
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
