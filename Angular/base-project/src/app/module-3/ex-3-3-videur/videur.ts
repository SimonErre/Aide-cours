import { Component } from '@angular/core';

// =============================================================
// Exercice 3.3 : Le videur de la taverne
// Objectif : @if / @else.
// =============================================================

const NIVEAU_REQUIS = 10;

@Component({
  selector: 'app-videur',
  template: `
    <!-- TODO : "Ton niveau : X" et boutons Niveau +1 / Niveau -1 -->
    <!-- TODO : @if niveau >= 10, sinon message de refus -->
  `,
})
export class Videur {
  protected readonly niveauRequis = NIVEAU_REQUIS;

  // TODO : signal niveau (4) et méthode pour le changer
}
