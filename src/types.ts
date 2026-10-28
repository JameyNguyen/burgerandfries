export type Category = 'burgers' | 'fries';
export type TierId = string;

export interface FoodEntry {
  id: string; // stable, never reused; rename slug freely, never id
  slug: string; // used in the URL: /burgers/<slug>
  category: Category;
  name: string;
  restaurant: string;
  location?: string;
  score: number; // 0 to SCORE_MAX; drives rank and tier
  rank?: number; // optional tie-breaker when scores are equal
  tierOverride?: TierId; // optional; normally tier comes from score
  shortDescription: string;
  review: string[]; // one string per paragraph
  image?: string; // e.g. "/images/burgers/my-burger.jpg" (file lives in /public)
  imageAlt?: string;
  dateTried?: string; // ISO date, e.g. "2025-03-14"
  tastingNotes?: string[];
  pros?: string[];
  cons?: string[];
  tags?: string[];
  featured?: boolean;
  isSample?: boolean; // shows a "sample entry" label; delete when you replace it
}

export interface TierDef {
  id: TierId;
  label: string;
  description: string;
  minScore: number; // lowest score that lands in this tier
  color: string; // background of the tier badge
  textColor: string;
}

export interface RankedEntry extends FoodEntry {
  tier: TierId;
  position: number; // 1-based position within its category
}
