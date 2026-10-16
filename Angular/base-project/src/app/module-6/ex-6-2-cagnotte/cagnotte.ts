import { Service } from '@angular/core';

/** Stream tip jar shared by every component that injects it. */
@Service()
export class Cagnotte {
  // TODO : signal privé _credits (100) exposé en lecture seule avec asReadonly()

  deposer(montant: number) {
    // TODO
  }

  /** Returns false when the jar does not hold enough credits. */
  retirer(montant: number): boolean {
    // TODO
    return false;
  }
}
