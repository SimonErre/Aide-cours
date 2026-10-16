import { Component } from '@angular/core';

// =============================================================
// Exercice 2.2 : La jauge d'aura
// Objectif : dériver des valeurs avec computed().
// =============================================================

@Component({
  selector: 'app-jauge-aura',
  template: `
    <!-- TODO : "Aura : 80 / 100 (80 %)" puis "Etat : ..." -->
    <!-- TODO : boutons "Faire un truc cringe (-15)" et "Mewing (+10)" -->
  `,
})
export class JaugeAura {
  // TODO : signals aura (80) et auraMax (100)
  // TODO : computed pourcentage et etat
  // TODO : méthodes cringe() et mewing() (aura entre 0 et auraMax)
}
