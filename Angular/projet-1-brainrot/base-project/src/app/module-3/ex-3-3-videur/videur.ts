import { Component } from '@angular/core';

// =============================================================
// Exercice 3.3 : Le videur du club des sigmas
// Objectif : @if / @else.
// =============================================================

const AURA_REQUISE = 10;

@Component({
  selector: 'app-videur',
  template: `
    <!-- TODO : "Ton niveau d'aura : X" et boutons Aura +1 / Aura -1 -->
    <!-- TODO : @if aura >= 10, sinon message de refus -->
  `,
})
export class Videur {
  protected readonly auraRequise = AURA_REQUISE;

  // TODO : signal aura (4) et méthode pour le changer
}
