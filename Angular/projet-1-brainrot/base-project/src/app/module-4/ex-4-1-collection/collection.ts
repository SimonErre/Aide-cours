import { Component } from '@angular/core';

import { CarteBrainrot } from './carte-brainrot';

// =============================================================
// Exercice 4.1 : La collection
// Objectif : passer des données au composant enfant avec input().
// =============================================================

@Component({
  imports: [CarteBrainrot],
  selector: 'app-collection',
  template: `
    <!-- TODO : trois <app-carte-brainrot> -->
  `,
})
export class Collection {}
