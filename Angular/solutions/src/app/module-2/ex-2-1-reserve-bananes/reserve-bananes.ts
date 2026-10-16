import { Component, signal } from '@angular/core';

const BANANES_DEPART = 3;

@Component({
  selector: 'app-reserve-bananes',
  template: `
    <p>🍌 Bananes de Chimpanzini : {{ bananes() }}</p>
    <button (click)="manger()">Manger</button>
    <button (click)="acheter()">Acheter</button>
    <button (click)="vider()">Tout donner</button>
  `,
})
export class ReserveBananes {
  protected readonly bananes = signal(BANANES_DEPART);

  protected manger() {
    this.bananes.update((n) => Math.max(0, n - 1));
  }

  protected acheter() {
    this.bananes.update((n) => n + 1);
  }

  protected vider() {
    this.bananes.set(0);
  }
}
