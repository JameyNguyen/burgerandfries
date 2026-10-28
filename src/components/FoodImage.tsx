import { useState } from 'react';
import type { FoodEntry } from '../types';

export default function FoodImage({ entry }: { entry: FoodEntry }) {
  const [failed, setFailed] = useState(false);
  if (!entry.image || failed) {
    return (
      <div className="img img--fallback" role="img" aria-label={`No photo yet for ${entry.name}`}>
        <span aria-hidden="true">{entry.category === 'burgers' ? 'Burger' : 'Fries'}</span>
      </div>
    );
  }
  return (
    <img className="img" src={entry.image} alt={entry.imageAlt ?? `${entry.name} at ${entry.restaurant}`} loading="lazy" onError={() => setFailed(true)} />
  );
}
