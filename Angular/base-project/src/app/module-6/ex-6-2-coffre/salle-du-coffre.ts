import { Component } from '@angular/core';

import { Aventurier } from './aventurier';
import { Banquier } from './banquier';

// =============================================================
// Exercice 6.2 : Le coffre partagé
// Objectif : partager des données entre composants via un service.
// =============================================================

@Component({
  imports: [Aventurier, Banquier],
  selector: 'app-salle-du-coffre',
  template: `
    <app-banquier />
    <app-aventurier />
  `,
  styles: `
    :host {
      display: flex;
      gap: 4rem;
    }
  `,
})
export class SalleDuCoffre {}
