import { Service } from '@angular/core';

/** Thin wrapper around localStorage: JSON in, JSON out, never throws. */
@Service()
export class Stockage {
  lire<T>(cle: string): T | null {
    try {
      const brut = localStorage.getItem(cle);
      return brut === null ? null : (JSON.parse(brut) as T);
    } catch {
      return null;
    }
  }

  ecrire(cle: string, valeur: unknown) {
    try {
      localStorage.setItem(cle, JSON.stringify(valeur));
    } catch {
      // Storage full or blocked: the app keeps working in memory.
    }
  }

  supprimer(cle: string) {
    try {
      localStorage.removeItem(cle);
    } catch {
      // Same as above.
    }
  }
}
