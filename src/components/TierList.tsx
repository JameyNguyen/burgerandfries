import { groupByTier } from '../lib/ranking';
import type { RankedEntry } from '../types';
import FoodCard from './FoodCard';

export default function TierList({ entries }: { entries: RankedEntry[] }) {
  return (
    <div className="tiers">
      {groupByTier(entries).map(({ tier, entries: items }) => (
        <section key={tier.id} className="tier" aria-labelledby={`tier-${tier.id}`}>
          <div className="tier-head" style={{ background: tier.color, color: tier.textColor }}>
            <span className="tier-letter" aria-hidden="true">{tier.id}</span>
            <div>
              <h2 id={`tier-${tier.id}`}>{tier.label}</h2>
              <p>{tier.description}</p>
            </div>
          </div>
          {items.length === 0 ? (
            <p className="tier-empty">Nothing here yet.</p>
          ) : (
            <div className="tier-items">
              {items.map((e) => <FoodCard key={e.id} entry={e} />)}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
