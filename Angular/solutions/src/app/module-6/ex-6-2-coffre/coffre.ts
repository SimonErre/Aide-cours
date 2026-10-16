import { Service, signal } from '@angular/core';

const OR_DEPART = 100;

/** Gold chest shared by every component that injects it. */
@Service()
export class Coffre {
  private readonly _or = signal(OR_DEPART);
  readonly or = this._or.asReadonly();

  deposer(montant: number) {
    this._or.update((or) => or + montant);
  }

  /** Returns false when the chest does not hold enough gold. */
  retirer(montant: number): boolean {
    if (montant > this._or()) {
      return false;
    }

    this._or.update((or) => or - montant);
    return true;
  }
}
