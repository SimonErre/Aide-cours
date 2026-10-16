import { Service } from '@angular/core';

import { Brainrot } from './brainrot';

/** Catalogue of known brainrots. */
@Service()
export class BrainrotdexService {
  readonly brainrots: readonly Brainrot[] = [
    {
      id: 1,
      nom: 'Tralalero Tralala',
      aura: 300,
      description: 'Requin à trois pattes en baskets.',
    },
    {
      id: 2,
      nom: 'Tung Tung Tung Sahur',
      aura: 250,
      description: 'Bâton en bois qui te réveille la nuit.',
    },
    { id: 3, nom: 'Bombardiro Crocodilo', aura: 500, description: 'Mi-crocodile, mi-bombardier.' },
  ];

  trouver(id: number): Brainrot | undefined {
    return this.brainrots.find((brainrot) => brainrot.id === id);
  }
}
