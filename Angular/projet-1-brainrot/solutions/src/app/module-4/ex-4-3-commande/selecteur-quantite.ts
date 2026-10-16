import { Component, model } from '@angular/core';

const QUANTITE_MIN = 1;
const QUANTITE_MAX = 10;

/** Reusable "[-] n [+]" picker, two-way bindable with [(quantite)]. */
@Component({
  selector: 'app-selecteur-quantite',
  template: `
    <button [disabled]="quantite() <= min" (click)="changer(-1)">-</button>
    <strong>{{ quantite() }}</strong>
    <button [disabled]="quantite() >= max" (click)="changer(1)">+</button>
  `,
})
export class SelecteurQuantite {
  readonly quantite = model(QUANTITE_MIN);

  protected readonly min = QUANTITE_MIN;
  protected readonly max = QUANTITE_MAX;

  protected changer(delta: number) {
    this.quantite.update((q) => Math.min(QUANTITE_MAX, Math.max(QUANTITE_MIN, q + delta)));
  }
}
