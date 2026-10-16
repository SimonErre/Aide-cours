import { Component, signal } from '@angular/core';

type Classe = 'guerrier' | 'mage' | 'voleur';

@Component({
  selector: 'app-choix-classe',
  template: `
    <button (click)="classe.set('guerrier')">Guerrier</button>
    <button (click)="classe.set('mage')">Mage</button>
    <button (click)="classe.set('voleur')">Voleur</button>

    @switch (classe()) {
      @case ('guerrier') {
        <p>⚔️ Force brute et armure lourde.</p>
      }
      @case ('mage') {
        <p>🔮 Maîtrise des arcanes.</p>
      }
      @case ('voleur') {
        <p>🗡️ Discrétion et coups critiques.</p>
      }
      @default {
        <p>Choisis ta classe, aventurier.</p>
      }
    }
  `,
})
export class ChoixClasse {
  protected readonly classe = signal<Classe | null>(null);
}
