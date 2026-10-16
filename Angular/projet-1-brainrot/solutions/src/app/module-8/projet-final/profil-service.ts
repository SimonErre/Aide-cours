import { computed, Service, signal } from '@angular/core';

const CREDITS_DEPART = 200;

/** The player's profile: identity and credits. */
@Service()
export class ProfilService {
  private readonly _nom = signal('');
  private readonly _team = signal('');
  private readonly _credits = signal(CREDITS_DEPART);

  readonly nom = this._nom.asReadonly();
  readonly team = this._team.asReadonly();
  readonly credits = this._credits.asReadonly();
  readonly estCree = computed(() => this._nom() !== '');

  creer(nom: string, team: string) {
    this._nom.set(nom);
    this._team.set(team);
  }

  /** Returns false when the profile does not hold enough credits. */
  depenser(montant: number): boolean {
    if (montant > this._credits()) {
      return false;
    }

    this._credits.update((credits) => credits - montant);
    return true;
  }

  gagner(montant: number) {
    this._credits.update((credits) => credits + montant);
  }
}
