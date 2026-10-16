import { computed, inject, Service, signal } from '@angular/core';

import { HerosService } from './heros-service';
import { Objet } from './objet';

const POIDS_MAX = 30;
const TAUX_REVENTE = 0.5;

/** One bought item. `uid` tells apart two copies of the same item. */
export interface ObjetPossede {
  uid: number;
  objet: Objet;
}

/** The hero's bag: buying and selling go through here. */
@Service()
export class SacService {
  private readonly heros = inject(HerosService);
  private readonly _contenu = signal<ObjetPossede[]>([]);
  private prochainUid = 1;

  readonly poidsMax = POIDS_MAX;
  readonly contenu = this._contenu.asReadonly();

  readonly poidsTotal = computed(() =>
    this._contenu().reduce((total, possede) => total + possede.objet.poids, 0),
  );

  readonly valeurTotale = computed(() =>
    this._contenu().reduce((total, possede) => total + this.prixRevente(possede.objet), 0),
  );

  peutAcheter(objet: Objet, quantite: number): boolean {
    const assezDOr = objet.prix * quantite <= this.heros.or();
    const assezDePlace = this.poidsTotal() + objet.poids * quantite <= POIDS_MAX;

    return assezDOr && assezDePlace;
  }

  acheter(objet: Objet, quantite: number): boolean {
    if (!this.peutAcheter(objet, quantite)) {
      return false;
    }

    this.heros.depenser(objet.prix * quantite);

    const achats = Array.from({ length: quantite }, () => ({ uid: this.prochainUid++, objet }));
    this._contenu.update((contenu) => [...contenu, ...achats]);
    return true;
  }

  vendre(uid: number) {
    const possede = this._contenu().find((p) => p.uid === uid);

    if (!possede) {
      return;
    }

    this.heros.gagner(this.prixRevente(possede.objet));
    this._contenu.update((contenu) => contenu.filter((p) => p.uid !== uid));
  }

  prixRevente(objet: Objet): number {
    return Math.floor(objet.prix * TAUX_REVENTE);
  }
}
