import { Component, inject, signal } from '@angular/core';

import { Coffre } from './coffre';

const DEPENSE = 25;

@Component({
  selector: 'app-aventurier',
  template: `
    <h3>Aventurier</h3>
    <p>Or du coffre : {{ coffre.or() }}</p>
    <button (click)="depenser()">Dépenser 25</button>
    @if (refus()) {
      <p>Pas assez d'or !</p>
    }
  `,
})
export class Aventurier {
  protected readonly coffre = inject(Coffre);
  protected readonly refus = signal(false);

  protected depenser() {
    this.refus.set(!this.coffre.retirer(DEPENSE));
  }
}
