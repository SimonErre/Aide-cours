import { Component } from '@angular/core';

import { Client } from './client';
import { Tavernier } from './tavernier';

@Component({
  imports: [Client, Tavernier],
  selector: 'app-taverne',
  template: `
    <h2>🍺 La Taverne du Poney Fringant</h2>
    <app-tavernier />
    <app-client />
    <app-client />
    <app-client />
  `,
})
export class Taverne {}
