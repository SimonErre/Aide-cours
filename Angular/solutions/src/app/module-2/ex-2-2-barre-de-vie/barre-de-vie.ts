import { Component, computed, signal } from '@angular/core';

const PV_DEPART = 80;
const PV_MAX = 100;
const DEGATS = 15;
const SOIN = 10;
const SEUIL_FORME = 70;
const SEUIL_BLESSE = 30;

@Component({
  selector: 'app-barre-de-vie',
  template: `
    <p>PV : {{ pv() }} / {{ pvMax() }} ({{ pourcentage() }} %)</p>
    <p>Etat : {{ etat() }}</p>
    <button (click)="recevoirCoup()">Recevoir un coup (-15)</button>
    <button (click)="soigner()">Se soigner (+10)</button>
  `,
})
export class BarreDeVie {
  protected readonly pv = signal(PV_DEPART);
  protected readonly pvMax = signal(PV_MAX);

  protected readonly pourcentage = computed(() => Math.round((this.pv() / this.pvMax()) * 100));

  protected readonly etat = computed(() => {
    if (this.pourcentage() > SEUIL_FORME) {
      return 'En pleine forme';
    }

    if (this.pourcentage() > SEUIL_BLESSE) {
      return 'Blessé';
    }

    return 'Au bord du gouffre';
  });

  protected recevoirCoup() {
    this.pv.update((pv) => Math.max(0, pv - DEGATS));
  }

  protected soigner() {
    this.pv.update((pv) => Math.min(this.pvMax(), pv + SOIN));
  }
}
