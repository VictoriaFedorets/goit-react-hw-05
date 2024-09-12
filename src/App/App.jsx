import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// import { Navigate } from "react-router-dom";

import Navigation from "../components/Navigation/Navigation";
import css from "./App.module.css";
const MovieCast = lazy(() => import("../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../components/MovieReviews/MovieReviews")
);

// import HomePage from "../pages/HomePage/HomePage";
// import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
// import MoviesPage from "../pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);

export default function App() {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
}
