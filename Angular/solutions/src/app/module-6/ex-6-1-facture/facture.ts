import { Component, inject } from '@angular/core';

import { Marchand } from './marchand';

const PRIX_POTION = 15;

@Component({
  selector: 'app-facture',
  template: `
    @for (quantite of quantites; track quantite) {
      <p>
        {{ quantite }} potions à {{ prixPotion }} pièces :
        {{ marchand.prixTotal(prixPotion, quantite) }} pièces
        @if (marchand.aRemise(quantite)) {
          (remise de 10 % appliquée)
        }
      </p>
    }
  `,
})
export class Facture {
  protected readonly marchand = inject(Marchand);
  protected readonly prixPotion = PRIX_POTION;
  protected readonly quantites = [3, 6];
}
