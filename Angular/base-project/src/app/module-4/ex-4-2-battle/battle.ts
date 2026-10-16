import { Component } from '@angular/core';

import { CarteBrainrot } from './carte-brainrot';

// =============================================================
// Exercice 4.2 : La battle
// Objectif : écouter un événement émis par l'enfant avec output().
// =============================================================

@Component({
  imports: [CarteBrainrot],
  selector: 'app-battle',
  template: `
    <!-- TODO : trois cartes, chacune écoute (clash) -->

    <h3>Historique de la battle :</h3>
    <!-- TODO : liste des clashs -->
  `,
})
export class Battle {
  // TODO : signal historique (string[])
  // TODO : méthode clasher(nom: string)
  // TODO (bonus) : signal des brainrots pour retirer 10 d'aura au brainrot clashé
}
