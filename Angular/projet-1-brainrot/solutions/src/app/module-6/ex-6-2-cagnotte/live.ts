import { Component } from '@angular/core';

import { Pote } from './pote';
import { Streamer } from './streamer';

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
