// The only file the UI imports data from. Swap the bodies of these functions
// for a CMS or API later; components do not need to change.
import { rankEntries } from '../lib/ranking';
import type { Category, RankedEntry } from '../types';
import { burgers } from './burgers';
import { fries } from './fries';

const SOURCES = { burgers, fries };
const ranked: Record<Category, RankedEntry[]> = {
  burgers: rankEntries(burgers),
  fries: rankEntries(fries),
};

export const isCategory = (value: string | undefined): value is Category =>
  value === 'burgers' || value === 'fries';

export const getRanked = (category: Category): RankedEntry[] => ranked[category];

export const getEntry = (category: Category, slug: string): RankedEntry | undefined =>
  ranked[category].find((e) => e.slug === slug);

export const getFeatured = (category: Category): RankedEntry | undefined =>
  ranked[category].find((e) => e.featured) ?? ranked[category][0];

export function getNeighbors(entry: RankedEntry) {
  const list = ranked[entry.category];
  const i = list.findIndex((e) => e.id === entry.id);
  return { previous: list[i - 1], next: list[i + 1] };
}

export const countEntries = (category: Category) => SOURCES[category].length;
