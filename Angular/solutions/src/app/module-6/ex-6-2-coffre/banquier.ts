import { Component, inject } from '@angular/core';

import { Coffre } from './coffre';

const DEPOT = 10;

@Component({
  selector: 'app-banquier',
  template: `
    <h3>Banquier</h3>
    <p>Or du coffre : {{ coffre.or() }}</p>
    <button (click)="deposer()">Déposer 10</button>
  `,
})
export class Banquier {
  protected readonly coffre = inject(Coffre);

  protected deposer() {
    this.coffre.deposer(DEPOT);
  }
}
