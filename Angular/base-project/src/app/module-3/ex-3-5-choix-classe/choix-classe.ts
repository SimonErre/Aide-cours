import { Component } from '@angular/core';

// =============================================================
// Exercice 3.5 : Le choix de classe
// Objectif : @switch / @case / @default.
// =============================================================

type Classe = 'guerrier' | 'mage' | 'voleur';

@Component({
  selector: 'app-choix-classe',
  template: `
    <!-- TODO : boutons Guerrier, Mage, Voleur -->
    <!-- TODO : @switch sur la classe choisie -->
  `,
})
export class ChoixClasse {
  // TODO : signal<Classe | null> initialisé à null
}
