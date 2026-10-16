import { Service } from '@angular/core';

import { Objet } from './objet';

/** Items sold at the shop. */
@Service()
export class CatalogueService {
  readonly objets: readonly Objet[] = [
    { id: 1, nom: 'Skin Tralalero', prix: 40, taille: 3, categorie: 'Skins' },
    { id: 2, nom: 'Skin Bombardiro', prix: 30, taille: 5, categorie: 'Skins' },
    { id: 3, nom: 'Emote Mewing', prix: 55, taille: 2, categorie: 'Emotes' },
    { id: 4, nom: 'Emote Tung Tung', prix: 90, taille: 12, categorie: 'Emotes' },
    { id: 5, nom: 'Boost Aura x2', prix: 15, taille: 0.5, categorie: 'Boosts' },
    { id: 6, nom: 'Boost Rizz', prix: 35, taille: 0.5, categorie: 'Boosts' },
  ];

  trouver(id: number): Objet | undefined {
    return this.objets.find((objet) => objet.id === id);
  }
}
