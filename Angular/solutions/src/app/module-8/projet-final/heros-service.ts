import { computed, Service, signal } from '@angular/core';

const OR_DEPART = 200;

/** The player's hero: identity and gold purse. */
@Service()
export class HerosService {
  private readonly _nom = signal('');
  private readonly _classe = signal('');
  private readonly _or = signal(OR_DEPART);

  readonly nom = this._nom.asReadonly();
  readonly classe = this._classe.asReadonly();
  readonly or = this._or.asReadonly();
  readonly estCree = computed(() => this._nom() !== '');

  creer(nom: string, classe: string) {
    this._nom.set(nom);
    this._classe.set(classe);
  }

  /** Returns false when the purse does not hold enough gold. */
  depenser(montant: number): boolean {
    if (montant > this._or()) {
      return false;
    }

    this._or.update((or) => or - montant);
    return true;
  }

  gagner(montant: number) {
    this._or.update((or) => or + montant);
  }
}
