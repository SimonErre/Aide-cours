import { Component } from '@angular/core';

// =============================================================
// Exercice 3.5 : Le choix de team
// Objectif : @switch / @case / @default.
// =============================================================

type Team = 'tralalero' | 'bombardiro' | 'tung';

@Component({
  selector: 'app-choix-team',
  template: `
    <!-- TODO : boutons Tralalero, Bombardiro, Tung Tung -->
    <!-- TODO : @switch sur la team choisie -->
  `,
})
export class ChoixTeam {
  // TODO : signal<Team | null> initialisé à null
}
