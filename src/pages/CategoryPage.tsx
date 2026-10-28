import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import RankedList from '../components/RankedList';
import TierList from '../components/TierList';
import { CATEGORIES } from '../config/tiers';
import { getRanked, isCategory } from '../data';
import { useTitle } from '../lib/useTitle';
import type { Category } from '../types';
import NotFound from './NotFound';

type View = 'tiers' | 'ranked';
type Sort = 'rank' | 'name' | 'recent';

export default function CategoryPage() {
  const { category } = useParams();
  if (!isCategory(category)) return <NotFound />;
  return <CategoryView key={category} category={category} />;
}

function CategoryView({ category }: { category: Category }) {
  const cfg = CATEGORIES[category];
  useTitle(`${cfg.label} ranked`, cfg.intro);

  const [view, setView] = useState<View>('tiers');
  const [sort, setSort] = useState<Sort>('rank');
  const [location, setLocation] = useState('');

  const all = getRanked(category);
  const locations = useMemo(
    () => [...new Set(all.map((e) => e.location).filter((l): l is string => Boolean(l)))].sort(),
    [all],
  );

  const shown = useMemo(() => {
    const list = all.filter((e) => !location || e.location === location);
    if (sort === 'name') return [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'recent') return [...list].sort((a, b) => (b.dateTried ?? '').localeCompare(a.dateTried ?? ''));
    return list;
  }, [all, sort, location]);

  return (
    <>
      <header className="page-head">
        <h1>{cfg.label}, ranked</h1>
        <p>{cfg.intro}</p>
      </header>

      {all.length === 0 ? (
        <p className="empty">No {category} yet. Add your first entry in <code>src/data/{category}.ts</code>.</p>
      ) : (
        <>
          <div className="controls">
            <div role="group" aria-label="View" className="seg">
              <button type="button" aria-pressed={view === 'tiers'} onClick={() => setView('tiers')}>Tier list</button>
              <button type="button" aria-pressed={view === 'ranked'} onClick={() => setView('ranked')}>Ranked list</button>
            </div>
            <label>Sort
              <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
                <option value="rank">Score</option>
                <option value="name">Name</option>
                <option value="recent">Recently tried</option>
              </select>
            </label>
            {locations.length > 1 && (
              <label>Location
                <select value={location} onChange={(e) => setLocation(e.target.value)}>
                  <option value="">All</option>
                  {locations.map((l) => <option key={l}>{l}</option>)}
                </select>
              </label>
            )}
          </div>
          {shown.length === 0 ? (
            <p className="empty">Nothing matches that filter.</p>
          ) : view === 'tiers' ? (
            <TierList entries={shown} />
          ) : (
            <RankedList entries={shown} />
          )}
        </>
      )}
    </>
  );
}
