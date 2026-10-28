import { TIERS } from '../config/tiers';
import type { FoodEntry, RankedEntry, TierDef, TierId } from '../types';

export function tierForScore(score: number): TierDef {
  return TIERS.find((t) => score >= t.minScore) ?? TIERS[TIERS.length - 1];
}

export function getTier(id: TierId): TierDef {
  return TIERS.find((t) => t.id === id) ?? TIERS[TIERS.length - 1];
}

/**
 * The one ranking rule: higher score first; ties broken by explicit `rank`
 * (lower first), then by name. Tier comes from score unless `tierOverride` is set.
 */
export function rankEntries(entries: FoodEntry[]): RankedEntry[] {
  return [...entries]
    .sort(
      (a, b) =>
        b.score - a.score ||
        (a.rank ?? Infinity) - (b.rank ?? Infinity) ||
        a.name.localeCompare(b.name),
    )
    .map((e, i) => ({ ...e, position: i + 1, tier: e.tierOverride ?? tierForScore(e.score).id }));
}

export function groupByTier(entries: RankedEntry[]): { tier: TierDef; entries: RankedEntry[] }[] {
  return TIERS.map((tier) => ({ tier, entries: entries.filter((e) => e.tier === tier.id) }));
}

export function formatDate(iso?: string): string | undefined {
  if (!iso) return undefined;
  const d = new Date(iso + 'T00:00:00');
  return Number.isNaN(d.getTime())
    ? undefined
    : d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
