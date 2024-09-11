import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 Not Found!</h1>
      <p>
        Please use this link to go <Link to="/">Go back</Link>
      </p>
    </div>
  );
}
