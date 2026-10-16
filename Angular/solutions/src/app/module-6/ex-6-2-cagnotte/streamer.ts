import { Component, inject } from '@angular/core';

import { Cagnotte } from './cagnotte';

const DON = 10;

@Component({
  selector: 'app-streamer',
  template: `
    <h3>🎥 Streamer</h3>
    <p>Cagnotte : {{ cagnotte.credits() }}</p>
    <button (click)="recevoirDon()">Recevoir un don (+10)</button>
  `,
})
export class Streamer {
  protected readonly cagnotte = inject(Cagnotte);

  protected recevoirDon() {
    this.cagnotte.deposer(DON);
  }
}
