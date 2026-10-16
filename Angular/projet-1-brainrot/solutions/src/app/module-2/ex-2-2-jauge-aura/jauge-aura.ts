import { Component, computed, signal } from '@angular/core';

const AURA_DEPART = 80;
const AURA_MAX = 100;
const CRINGE = 15;
const MEWING = 10;
const SEUIL_SIGMA = 70;
const SEUIL_OK = 30;

@Component({
  selector: 'app-jauge-aura',
  template: `
    <p>Aura : {{ aura() }} / {{ auraMax() }} ({{ pourcentage() }} %)</p>
    <p>Etat : {{ etat() }}</p>
    <button (click)="cringe()">Faire un truc cringe (-15)</button>
    <button (click)="mewing()">Mewing (+10)</button>
  `,
})
export class JaugeAura {
  protected readonly aura = signal(AURA_DEPART);
  protected readonly auraMax = signal(AURA_MAX);

  protected readonly pourcentage = computed(() => Math.round((this.aura() / this.auraMax()) * 100));

  protected readonly etat = computed(() => {
    if (this.pourcentage() > SEUIL_SIGMA) {
      return 'Sigma absolu 🗿';
    }

    if (this.pourcentage() > SEUIL_OK) {
      return 'Ça passe';
    }

    return 'Totalement cooked 💀';
  });

  protected cringe() {
    this.aura.update((aura) => Math.max(0, aura - CRINGE));
  }

  protected mewing() {
    this.aura.update((aura) => Math.min(this.auraMax(), aura + MEWING));
  }
}
