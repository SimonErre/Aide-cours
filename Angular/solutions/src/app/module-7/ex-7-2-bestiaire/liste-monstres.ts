import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BestiaireService } from './bestiaire-service';

@Component({
  imports: [RouterLink],
  selector: 'app-liste-monstres',
  template: `
    <h2>Bestiaire</h2>
    <ul>
      @for (monstre of bestiaire.monstres; track monstre.id) {
        <li>
          <a [routerLink]="[monstre.id]">{{ monstre.nom }}</a>
        </li>
      }
    </ul>
  `,
})
export class ListeMonstres {
  protected readonly bestiaire = inject(BestiaireService);
}
