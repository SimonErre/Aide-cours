import { Component } from '@angular/core';

import { Pote } from './pote';
import { Streamer } from './streamer';

// =============================================================
// Exercice 6.2 : La cagnotte du live
// Objectif : partager des données entre composants via un service.
// =============================================================

@Component({
  imports: [Pote, Streamer],
  selector: 'app-live',
  template: `
    <app-streamer />
    <app-pote />
  `,
  styles: `
    :host {
      display: flex;
      gap: 4rem;
    }
  `,
})
export class Live {}
