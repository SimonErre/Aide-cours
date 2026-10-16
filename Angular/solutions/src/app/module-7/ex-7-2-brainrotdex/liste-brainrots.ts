import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BrainrotdexService } from './brainrotdex-service';

@Component({
  imports: [RouterLink],
  selector: 'app-liste-brainrots',
  template: `
    <h2>Brainrotdex</h2>
    <ul>
      @for (brainrot of brainrotdex.brainrots; track brainrot.id) {
        <li>
          <a [routerLink]="[brainrot.id]">{{ brainrot.nom }}</a>
        </li>
      }
    </ul>
  `,
})
export class ListeBrainrots {
  protected readonly brainrotdex = inject(BrainrotdexService);
}
