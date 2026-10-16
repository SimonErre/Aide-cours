import { Component, computed, signal } from '@angular/core';

const CREDITS_DEPART = 40;
const PRIX_SKIN = 50;
const GAIN_SCROLL = 5;

@Component({
  selector: 'app-boutique-skins',
  template: `
    <p [class.fauche]="estFauche()">Crédits : {{ credits() }}</p>
    <p>Skin Bombardiro légendaire : {{ prixSkin }} crédits</p>
    <button (click)="scroller()">Scroller (+5 crédits)</button>
    <button [disabled]="estFauche()" (click)="acheterSkin()">Acheter le skin</button>
  `,
  styles: `
    .fauche {
      color: red;
    }
  `,
})
export class BoutiqueSkins {
  protected readonly prixSkin = PRIX_SKIN;
  protected readonly credits = signal(CREDITS_DEPART);
  protected readonly estFauche = computed(() => this.credits() < PRIX_SKIN);

  protected scroller() {
    this.credits.update((credits) => credits + GAIN_SCROLL);
  }

  protected acheterSkin() {
    this.credits.update((credits) => credits - PRIX_SKIN);
  }
}
