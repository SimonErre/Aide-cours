import { Component, inject, signal } from '@angular/core';

import { Cagnotte } from './cagnotte';

const TAXE = 25;

@Component({
  selector: 'app-pote',
  template: `
    <h3>🍟 Ton pote</h3>
    <p>Cagnotte : {{ cagnotte.credits() }}</p>
    <button (click)="taxer()">Prélever la taxe (-25)</button>
    @if (refus()) {
      <p>La cagnotte est vide, bro.</p>
    }
  `,
})
export class Pote {
  protected readonly cagnotte = inject(Cagnotte);
  protected readonly refus = signal(false);

  protected taxer() {
    this.refus.set(!this.cagnotte.retirer(TAXE));
  }
}
