import { Component } from '@angular/core';

import { CarteMonstre } from './carte-monstre';

// =============================================================
// Exercice 4.1 : Le bestiaire
// Objectif : passer des données au composant enfant avec input().
// =============================================================

@Component({
  imports: [CarteMonstre],
  selector: 'app-bestiaire',
  template: `
    <!-- TODO : trois <app-carte-monstre> (Gobelin, Troll, Dragon) -->
  `,
})
export class Bestiaire {}
