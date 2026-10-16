import { Component } from '@angular/core';

// =============================================================
// Exercice 2.2 : La barre de vie
// Objectif : dériver des valeurs avec computed().
// =============================================================

@Component({
  selector: 'app-barre-de-vie',
  template: `
    <!-- TODO : "PV : 80 / 100 (80 %)" puis "Etat : ..." -->
    <!-- TODO : boutons "Recevoir un coup (-15)" et "Se soigner (+10)" -->
  `,
})
export class BarreDeVie {
  // TODO : signals pv (80) et pvMax (100)
  // TODO : computed pourcentage et etat
  // TODO : méthodes recevoirCoup() et soigner() (PV entre 0 et pvMax)
}
