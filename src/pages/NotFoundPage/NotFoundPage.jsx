import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import { FaHome } from "react-icons/fa";

export default function NotFoundPage() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>404 Not Found!</h1>
      <p className={css.text}>The page does not exist, please go back</p>
      <Link to="/" className={css.linkHome}>
        Go home
        <FaHome className={css.iconHome} />
      </Link>
    </div>
  );
}
