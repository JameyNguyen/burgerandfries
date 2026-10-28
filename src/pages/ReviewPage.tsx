import { Link, useParams } from 'react-router-dom';
import FoodImage from '../components/FoodImage';
import TierBadge from '../components/TierBadge';
import { CATEGORIES, SCORE_MAX } from '../config/tiers';
import { getEntry, getNeighbors, isCategory } from '../data';
import { formatDate } from '../lib/ranking';
import { useTitle } from '../lib/useTitle';
import NotFound from './NotFound';

export default function ReviewPage() {
  const { category, slug } = useParams();
  const entry = isCategory(category) && slug ? getEntry(category, slug) : undefined;
  useTitle(entry ? `${entry.name}, ${entry.restaurant}` : 'Not found', entry?.shortDescription);
  if (!entry) return <NotFound />;

  const { previous, next } = getNeighbors(entry);
  const date = formatDate(entry.dateTried);
  const list = (title: string, items?: string[]) =>
    items && items.length > 0 && (
      <div>
        <h2>{title}</h2>
        <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
      </div>
    );

  return (
    <article className="review">
      <Link to={`/${entry.category}`} className="back">Back to {CATEGORIES[entry.category].label.toLowerCase()}</Link>
      <header className="review-head">
        <TierBadge tier={entry.tier} size="lg" />
        <h1>{entry.name}</h1>
        <p className="restaurant">
          {entry.restaurant}{entry.location ? `, ${entry.location}` : ''}{date ? `. Tried ${date}.` : ''}
        </p>
        <p className="score score--lg">{entry.score.toFixed(1)}<small>/{SCORE_MAX}</small> <span className="rank-note">#{entry.position} in {entry.category}</span></p>
      </header>
      <FoodImage entry={entry} />
      {entry.isSample && <p className="sample">Sample entry. Replace it with your own review.</p>}
      <div className="prose">
        {entry.review.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <div className="facts">
        {list('Tasting notes', entry.tastingNotes)}
        {list('What worked', entry.pros)}
        {list('What did not', entry.cons)}
      </div>
      <nav className="pager" aria-label="More in this ranking">
        {previous ? <Link to={`/${previous.category}/${previous.slug}`}>Higher: {previous.name}</Link> : <span />}
        {next ? <Link to={`/${next.category}/${next.slug}`}>Lower: {next.name}</Link> : <span />}
      </nav>
    </article>
  );
}
