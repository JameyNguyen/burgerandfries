import { TIERS } from "../config/tiers";
import { SITE } from "../config/site";
import { useTitle } from "../lib/useTitle";

export default function About() {
  useTitle("About", SITE.aboutBlurb);
  return (
    <div className="prose page-narrow">
      <h1>The Committee</h1>
      <p>
        Hey, I'm {SITE.author1}. {SITE.aboutBlurb1}
      </p>
      <p>
        Hola, I'm {SITE.author2}. {SITE.aboutBlurb2}
      </p>
      <p>
        Buenos Dias, I'm {SITE.author3}. {SITE.aboutBlurb3}
      </p>
      <h2>How we score</h2>
      <p>
        Every burger and every fry gets a separate rank. We don't care about
        price, brand, or area. There can be special tags for a good value burger
        or fry.
      </p>
      <ul>
        {TIERS.map((t) => (
          <li key={t.id}>
            <strong>{t.label}</strong>, from {t.minScore}: {t.description}
          </li>
        ))}
      </ul>
      {SITE.socials.length > 0 && (
        <>
          <h2>Find me</h2>
          <ul>
            {SITE.socials.map((s) => (
              <li key={s.url}>
                <a href={s.url} rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
