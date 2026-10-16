import { Service } from '@angular/core';

import { Monstre } from './monstre';

/** Catalogue of known monsters. */
@Service()
export class BestiaireService {
  readonly monstres: readonly Monstre[] = [
    { id: 1, nom: 'Gobelin', pv: 30, description: 'Petit, vert et très bruyant.' },
    { id: 2, nom: 'Troll', pv: 120, description: 'Lent mais frappe fort.' },
    { id: 3, nom: 'Dragon', pv: 500, description: 'Cracheur de feu, gardien du trésor.' },
  ];

  trouver(id: number): Monstre | undefined {
    // TODO : renvoie le monstre qui a cet id (find)
    return undefined;
  }
}
