import { Component } from '@angular/core';

import { CarteMonstre } from './carte-monstre';

// =============================================================
// Exercice 4.2 : Le combat
// Objectif : écouter un événement émis par l'enfant avec output().
// =============================================================

@Component({
  imports: [CarteMonstre],
  selector: 'app-combat',
  template: `
    <!-- TODO : trois cartes, chacune écoute (attaque) -->

    <h3>Journal de combat :</h3>
    <!-- TODO : liste des attaques -->
  `,
})
export class Combat {
  // TODO : signal journal (string[])
  // TODO : méthode attaquer(nom: string)
  // TODO (bonus) : signal des monstres pour retirer 10 PV au monstre attaqué
}
