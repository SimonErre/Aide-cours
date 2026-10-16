import { Service } from '@angular/core';

import { Objet } from './objet';

/** Items sold at the market. */
@Service()
export class CatalogueService {
  readonly objets: readonly Objet[] = [
    { id: 1, nom: 'Epée courte', prix: 40, poids: 3, categorie: 'Armes' },
    { id: 2, nom: 'Bouclier en chêne', prix: 30, poids: 5, categorie: 'Armures' },
    { id: 3, nom: 'Arc long', prix: 55, poids: 2, categorie: 'Armes' },
    { id: 4, nom: 'Cotte de mailles', prix: 90, poids: 12, categorie: 'Armures' },
    { id: 5, nom: 'Potion de soin', prix: 15, poids: 0.5, categorie: 'Potions' },
    { id: 6, nom: 'Elixir de force', prix: 35, poids: 0.5, categorie: 'Potions' },
  ];

  trouver(id: number): Objet | undefined {
    // TODO : renvoie l'objet qui a cet id
    return undefined;
  }
}
