import { Link } from 'react-router-dom';
import { useTitle } from '../lib/useTitle';

export default function NotFound() {
  useTitle('Page not found');
  return (
    <div className="page-narrow">
      <h1>That page is not on the menu</h1>
      <p>The link may be old or mistyped. Try the <Link to="/burgers">burgers</Link> or the <Link to="/fries">fries</Link>.</p>
    </div>
  );
}
