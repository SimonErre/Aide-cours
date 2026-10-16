import { Service, signal } from '@angular/core';

const CREDITS_DEPART = 100;

/** Stream tip jar shared by every component that injects it. */
@Service()
export class Cagnotte {
  private readonly _credits = signal(CREDITS_DEPART);
  readonly credits = this._credits.asReadonly();

  deposer(montant: number) {
    this._credits.update((credits) => credits + montant);
  }

  /** Returns false when the jar does not hold enough credits. */
  retirer(montant: number): boolean {
    if (montant > this._credits()) {
      return false;
    }

    this._credits.update((credits) => credits - montant);
    return true;
  }
}
