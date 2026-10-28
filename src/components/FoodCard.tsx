import { Link } from 'react-router-dom';
import { SCORE_MAX } from '../config/tiers';
import type { RankedEntry } from '../types';
import FoodImage from './FoodImage';
import TierBadge from './TierBadge';

export default function FoodCard({ entry, large = false }: { entry: RankedEntry; large?: boolean }) {
  return (
    <article className={`card${large ? ' card--large' : ''}`}>
      <FoodImage entry={entry} />
      <div className="card-body">
        <p className="card-meta">
          <TierBadge tier={entry.tier} />
          <span className="score">{entry.score.toFixed(1)}<small>/{SCORE_MAX}</small></span>
        </p>
        <h3>
          <Link to={`/${entry.category}/${entry.slug}`} className="card-link">{entry.name}</Link>
        </h3>
        <p className="restaurant">{entry.restaurant}{entry.location ? `, ${entry.location}` : ''}</p>
        <p className="desc">{entry.shortDescription}</p>
      </div>
    </article>
  );
}
