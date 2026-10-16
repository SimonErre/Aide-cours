import { Service } from '@angular/core';

/** Gold chest shared by every component that injects it. */
@Service()
export class Coffre {
  // TODO : signal privé _or (100) exposé en lecture seule avec asReadonly()

  deposer(montant: number) {
    // TODO
  }

  /** Returns false when the chest does not hold enough gold. */
  retirer(montant: number): boolean {
    // TODO
    return false;
  }
}
