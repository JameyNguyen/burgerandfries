import { Link } from 'react-router-dom';
import { SCORE_MAX } from '../config/tiers';
import type { RankedEntry } from '../types';
import TierBadge from './TierBadge';

export default function RankedList({ entries }: { entries: RankedEntry[] }) {
  return (
    <ol className="ranked">
      {entries.map((e) => (
        <li key={e.id} className={e.position <= 3 ? 'ranked-top' : undefined}>
          <span className="ranked-pos" aria-label={`Rank ${e.position}`}>{e.position}</span>
          <div className="ranked-main">
            <Link to={`/${e.category}/${e.slug}`} className="card-link">{e.name}</Link>
            <span className="restaurant">{e.restaurant}</span>
          </div>
          <TierBadge tier={e.tier} />
          <span className="score">{e.score.toFixed(1)}<small>/{SCORE_MAX}</small></span>
        </li>
      ))}
    </ol>
  );
}
