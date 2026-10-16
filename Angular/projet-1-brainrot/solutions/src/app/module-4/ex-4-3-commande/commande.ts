import { Component, computed, signal } from '@angular/core';

import { SelecteurQuantite } from './selecteur-quantite';

const PRIX_CAFE = 15;

@Component({
  imports: [SelecteurQuantite],
  selector: 'app-commande',
  template: `
    <p>☕ Cappuccino Assassino ({{ prixCafe }} crédits)</p>
    <app-selecteur-quantite [(quantite)]="nbCafes" />
    <p>Total : {{ total() }} crédits</p>
  `,
})
export class Commande {
  protected readonly prixCafe = PRIX_CAFE;
  protected readonly nbCafes = signal(1);
  protected readonly total = computed(() => this.nbCafes() * PRIX_CAFE);
}
