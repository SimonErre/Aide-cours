import { Component, computed, signal } from '@angular/core';

const OR_DEPART = 40;
const PRIX_EPEE = 50;
const GAIN_MINAGE = 5;

@Component({
  selector: 'app-forge',
  template: `
    <p [class.pauvre]="estPauvre()">Or : {{ or() }}</p>
    <p>Epée longue : {{ prixEpee }} pièces</p>
    <button (click)="miner()">Miner (+5 or)</button>
    <button [disabled]="estPauvre()" (click)="acheterEpee()">Acheter l'épée</button>
  `,
  styles: `
    .pauvre {
      color: red;
    }
  `,
})
export class Forge {
  protected readonly prixEpee = PRIX_EPEE;
  protected readonly or = signal(OR_DEPART);
  protected readonly estPauvre = computed(() => this.or() < PRIX_EPEE);

  protected miner() {
    this.or.update((or) => or + GAIN_MINAGE);
  }

  protected acheterEpee() {
    this.or.update((or) => or - PRIX_EPEE);
  }
}
