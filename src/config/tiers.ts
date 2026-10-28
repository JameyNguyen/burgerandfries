import type { Category, TierDef } from '../types';

// Ordered best to worst. Change thresholds, names and colors here only.
export const TIERS: TierDef[] = [
  { id: 'S', label: 'S tier', description: '"Every weekend", "First thing that comes to mind", "Gotta Splurge"', minScore: 9, color: '#B3321E', textColor: '#FFF8EC' },
  { id: 'A', label: 'A tier', description: '"would come back to again", "something special about it", "ooh shii"', minScore: 8, color: '#E3B02E', textColor: '#1E2A1C' },
  { id: 'B', label: 'B tier', description: '"i\'d eat it if it was given to me", "yo any coupons" "it\'s yummy"', minScore: 6.5, color: '#4F7A2B', textColor: '#FFF8EC' },
  { id: 'C', label: 'C tier', description: '"edible", "last thing I would pick", "wouldn\'t come back", "wouldn\'t even remember this restaurant", "lets just go to kwikstar"', minScore: 5, color: '#5E7380', textColor: '#FFF8EC' },
  { id: 'F', label: 'F tier', description: '"not willing to finish it", "unsafe to eat", "raw", "cafeteria level meal"', minScore: 0, color: '#7A6F66', textColor: '#FFF8EC' },
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
