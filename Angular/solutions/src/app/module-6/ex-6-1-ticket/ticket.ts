import { Component, inject } from '@angular/core';

import { Caisse } from './caisse';

const PRIX_CAFE = 15;

@Component({
  selector: 'app-ticket',
  template: `
    @for (quantite of quantites; track quantite) {
      <p>
        {{ quantite }} cappuccinos à {{ prixCafe }} crédits :
        {{ caisse.prixTotal(prixCafe, quantite) }} crédits
        @if (caisse.aRemise(quantite)) {
          (remise de 10 % appliquée)
        }
      </p>
    }
  `,
})
export class Ticket {
  protected readonly caisse = inject(Caisse);
  protected readonly prixCafe = PRIX_CAFE;
  protected readonly quantites = [3, 6];
}
