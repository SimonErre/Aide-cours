import { computed, inject, Service, signal } from '@angular/core';

import { Utilisateur } from '../models/utilisateur';
import { COMPTES_DEMO } from './comptes-demo';
import { Stockage } from './stockage';

const CLE_SESSION = 'mon-budget.session';

/** Who is logged in. The session survives a page reload. */
@Service()
export class AuthService {
  private readonly stockage = inject(Stockage);
  private readonly _utilisateur = signal<Utilisateur | null>(
    this.stockage.lire<Utilisateur>(CLE_SESSION),
  );

  readonly utilisateur = this._utilisateur.asReadonly();
  readonly estConnecte = computed(() => this._utilisateur() !== null);

  /** Returns false when the credentials are wrong. */
  login(email: string, motDePasse: string): boolean {
    const compte = COMPTES_DEMO.find((c) => c.email === email && c.motDePasse === motDePasse);

    if (!compte) {
      return false;
    }

    const utilisateur: Utilisateur = { email: compte.email, pseudo: compte.pseudo };
    this._utilisateur.set(utilisateur);
    this.stockage.ecrire(CLE_SESSION, utilisateur);
    return true;
  }

  logout() {
    this._utilisateur.set(null);
    this.stockage.supprimer(CLE_SESSION);
  }
}
