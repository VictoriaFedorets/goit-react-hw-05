import css from "./LoadMore.module.css";

export default function LoadMore({ onClick, change, page, query, children }) {
  return (
    <button
      className={css.buttonNumber}
      type="button"
      onClick={() => onClick(page, change, query)}
    >
      {children}
    </button>
  );
}
