import { computed, inject, Service, signal } from '@angular/core';

import { ProfilService } from './profil-service';
import { Objet } from './objet';

const STOCKAGE_MAX = 30;
const TAUX_REVENTE = 0.5;

/** One bought item. `uid` tells apart two copies of the same item. */
export interface ObjetPossede {
  uid: number;
  objet: Objet;
}

/** The profile inventory: buying and selling go through here. */
@Service()
export class InventaireService {
  private readonly profil = inject(ProfilService);
  private readonly _contenu = signal<ObjetPossede[]>([]);
  private prochainUid = 1;

  readonly stockageMax = STOCKAGE_MAX;
  readonly contenu = this._contenu.asReadonly();

  readonly stockageTotal = computed(() =>
    this._contenu().reduce((total, possede) => total + possede.objet.taille, 0),
  );

  readonly valeurTotale = computed(() =>
    this._contenu().reduce((total, possede) => total + this.prixRevente(possede.objet), 0),
  );

  peutAcheter(objet: Objet, quantite: number): boolean {
    const assezDeCredits = objet.prix * quantite <= this.profil.credits();
    const assezDeStockage = this.stockageTotal() + objet.taille * quantite <= STOCKAGE_MAX;

    return assezDeCredits && assezDeStockage;
  }

  acheter(objet: Objet, quantite: number): boolean {
    if (!this.peutAcheter(objet, quantite)) {
      return false;
    }

    this.profil.depenser(objet.prix * quantite);

    const achats = Array.from({ length: quantite }, () => ({ uid: this.prochainUid++, objet }));
    this._contenu.update((contenu) => [...contenu, ...achats]);
    return true;
  }

  vendre(uid: number) {
    const possede = this._contenu().find((p) => p.uid === uid);

    if (!possede) {
      return;
    }

    this.profil.gagner(this.prixRevente(possede.objet));
    this._contenu.update((contenu) => contenu.filter((p) => p.uid !== uid));
  }

  prixRevente(objet: Objet): number {
    return Math.floor(objet.prix * TAUX_REVENTE);
  }
}
