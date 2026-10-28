import { Link } from 'react-router-dom';
import FoodCard from '../components/FoodCard';
import { CATEGORIES, CATEGORY_IDS } from '../config/tiers';
import { SITE } from '../config/site';
import { getFeatured, getRanked } from '../data';
import { useTitle } from '../lib/useTitle';

export default function Home() {
  useTitle();
  return (
    <>
      <section className="hero">
        <h1>{SITE.tagline}</h1>
        <p>
          My personal rankings of the burgers and fries I have tried. Each has its own tier list, and
          every entry has a full review.
        </p>
        <p className="hero-links">
          {CATEGORY_IDS.map((id) => (
            <Link key={id} className="btn" to={`/${id}`}>See all {CATEGORIES[id].label.toLowerCase()}</Link>
          ))}
        </p>
      </section>

      {CATEGORY_IDS.map((id) => {
        const featured = getFeatured(id);
        const top = getRanked(id).filter((e) => e.id !== featured?.id).slice(0, 2);
        return (
          <section key={id} className="home-section" aria-labelledby={`home-${id}`}>
            <div className="section-head">
              <h2 id={`home-${id}`}>Top {CATEGORIES[id].label.toLowerCase()}</h2>
              <Link to={`/${id}`}>Full {CATEGORIES[id].singular} tier list</Link>
            </div>
            {featured ? (
              <div className="home-grid">
                <FoodCard entry={featured} large />
                <div className="home-side">
                  {top.map((e) => <FoodCard key={e.id} entry={e} />)}
                </div>
              </div>
            ) : (
              <p className="empty">No {id} yet. Add your first entry in <code>src/data/{id}.ts</code>.</p>
            )}
          </section>
        );
      })}
    </>
  );
}
