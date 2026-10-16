import { Component } from '@angular/core';

import { Aventurier } from './aventurier';
import { Banquier } from './banquier';

@Component({
  imports: [Aventurier, Banquier],
  selector: 'app-salle-du-coffre',
  template: `
    <app-banquier />
    <app-aventurier />
  `,
  styles: `
    :host {
      display: flex;
      gap: 4rem;
    }
  `,
})
export class SalleDuCoffre {}
