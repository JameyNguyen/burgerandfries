import { useEffect } from 'react';
import { SITE } from '../config/site';

export function useTitle(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE.name}` : `${SITE.name}: burgers and fries, ranked`;
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}
