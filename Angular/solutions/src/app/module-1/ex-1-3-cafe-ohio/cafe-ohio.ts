import { Component } from '@angular/core';

import { Barista } from './barista';
import { Client } from './client';

@Component({
  imports: [Barista, Client],
  selector: 'app-cafe-ohio',
  template: `
    <h2>☕ Le Café de l'Ohio</h2>
    <app-barista />
    <app-client />
    <app-client />
    <app-client />
  `,
})
export class CafeOhio {}
