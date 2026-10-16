import { Component, signal } from '@angular/core';

const AURA_DEPART = 4;
const AURA_REQUISE = 10;

@Component({
  selector: 'app-videur',
  template: `
    <p>Ton niveau d'aura : {{ aura() }}</p>
    <button (click)="changerAura(1)">Aura +1</button>
    <button (click)="changerAura(-1)">Aura -1</button>

    @if (aura() >= auraRequise) {
      <p>Bienvenue au club des sigmas 🗿</p>
    } @else {
      <p>Désolé chef, il faut au moins {{ auraRequise }} d'aura. Reviens plus tard.</p>
    }
  `,
})
export class Videur {
  protected readonly auraRequise = AURA_REQUISE;
  protected readonly aura = signal(AURA_DEPART);

  protected changerAura(delta: number) {
    this.aura.update((aura) => Math.max(0, aura + delta));
  }
}
