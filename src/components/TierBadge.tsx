import { getTier } from '../lib/ranking';
import type { TierId } from '../types';

export default function TierBadge({ tier, size = 'sm' }: { tier: TierId; size?: 'sm' | 'lg' }) {
  const t = getTier(tier);
  return (
    <span className={`tier-badge tier-badge--${size}`} style={{ background: t.color, color: t.textColor }}>
      {t.label}
    </span>
  );
}
