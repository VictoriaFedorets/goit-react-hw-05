export default function LoadMore({ onClick, change, page, query, children }) {
  return (
    <button type="button" onClick={() => onClick(page, change, query)}>
      {children}
    </button>
  );
}
