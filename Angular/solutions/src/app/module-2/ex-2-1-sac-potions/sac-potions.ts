import { Component, signal } from '@angular/core';

const POTIONS_DEPART = 3;

@Component({
  selector: 'app-sac-potions',
  template: `
    <p>Potions dans le sac : {{ potions() }}</p>
    <button (click)="boire()">Boire</button>
    <button (click)="acheter()">Acheter</button>
    <button (click)="vider()">Vider le sac</button>
  `,
})
export class SacPotions {
  protected readonly potions = signal(POTIONS_DEPART);

  protected boire() {
    this.potions.update((n) => Math.max(0, n - 1));
  }

  protected acheter() {
    this.potions.update((n) => n + 1);
  }

  protected vider() {
    this.potions.set(0);
  }
}
