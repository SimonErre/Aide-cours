import { Component, computed, signal } from '@angular/core';

import { SelecteurQuantite } from './selecteur-quantite';

const PRIX_POTION = 15;

@Component({
  imports: [SelecteurQuantite],
  selector: 'app-comptoir',
  template: `
    <p>Potion de soin ({{ prixPotion }} pièces)</p>
    <app-selecteur-quantite [(quantite)]="nbPotions" />
    <p>Total : {{ total() }} pièces d'or</p>
  `,
})
export class Comptoir {
  protected readonly prixPotion = PRIX_POTION;
  protected readonly nbPotions = signal(1);
  protected readonly total = computed(() => this.nbPotions() * PRIX_POTION);
}
