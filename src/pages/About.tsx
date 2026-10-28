import { SCORE_MAX, TIERS } from '../config/tiers';
import { SITE } from '../config/site';
import { useTitle } from '../lib/useTitle';

export default function About() {
  useTitle('About', SITE.aboutBlurb);
  return (
    <div className="prose page-narrow">
      <h1>About</h1>
      <p>Hi, I am {SITE.author}. {SITE.aboutBlurb}</p>
      <h2>How I score</h2>
      <p>
        Every entry gets a score out of {SCORE_MAX}. Burgers and fries are ranked separately, so a
        great burger never pushes a fries entry up or down. Edit this section to describe what you
        weigh most.
      </p>
      <ul>
        {TIERS.map((t) => (
          <li key={t.id}><strong>{t.label}</strong>, from {t.minScore}: {t.description}</li>
        ))}
      </ul>
      {SITE.socials.length > 0 && (
        <>
          <h2>Find me</h2>
          <ul>{SITE.socials.map((s) => <li key={s.url}><a href={s.url} rel="noopener noreferrer">{s.label}</a></li>)}</ul>
        </>
      )}
    </div>
  );
}
