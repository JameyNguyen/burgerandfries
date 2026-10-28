import type { Category, TierDef } from '../types';

export const SCORE_MAX = 10;

// Ordered best to worst. Change thresholds, names and colors here only.
export const TIERS: TierDef[] = [
  { id: 'S', label: 'S tier', description: 'Exceptional. Among the best I have had.', minScore: 9, color: '#B3321E', textColor: '#FFF8EC' },
  { id: 'A', label: 'A tier', description: 'Excellent. I would go back tomorrow.', minScore: 8, color: '#E3B02E', textColor: '#1E2A1C' },
  { id: 'B', label: 'B tier', description: 'Good. Happy to eat it again.', minScore: 6.5, color: '#4F7A2B', textColor: '#FFF8EC' },
  { id: 'C', label: 'C tier', description: 'Average or inconsistent.', minScore: 5, color: '#5E7380', textColor: '#FFF8EC' },
  { id: 'D', label: 'D tier', description: 'Below average. Skip it.', minScore: 0, color: '#7A6F66', textColor: '#FFF8EC' },
];

export interface CategoryConfig {
  id: Category;
  label: string; // plural, used in nav and headings
  singular: string;
  intro: string;
}

export const CATEGORIES: Record<Category, CategoryConfig> = {
  burgers: {
    id: 'burgers',
    label: 'Burgers',
    singular: 'burger',
    intro: 'Every burger I have tried, sorted into tiers by score. Patty, bun, sauce and the mess factor all count.',
  },
  fries: {
    id: 'fries',
    label: 'Fries',
    singular: 'fries',
    intro: 'Fries get their own list. Crisp, seasoning, potato flavor and whether they are still good five minutes later.',
  },
};

export const CATEGORY_IDS = Object.keys(CATEGORIES) as Category[];
