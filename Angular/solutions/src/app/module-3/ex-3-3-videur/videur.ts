import { Component, signal } from '@angular/core';

const NIVEAU_DEPART = 4;
const NIVEAU_REQUIS = 10;

@Component({
  selector: 'app-videur',
  template: `
    <p>Ton niveau : {{ niveau() }}</p>
    <button (click)="changerNiveau(1)">Niveau +1</button>
    <button (click)="changerNiveau(-1)">Niveau -1</button>

    @if (niveau() >= niveauRequis) {
      <p>Entre donc, grand guerrier !</p>
    } @else {
      <p>Désolé gamin, il faut être au moins niveau {{ niveauRequis }}.</p>
    }
  `,
})
export class Videur {
  protected readonly niveauRequis = NIVEAU_REQUIS;
  protected readonly niveau = signal(NIVEAU_DEPART);

  protected changerNiveau(delta: number) {
    this.niveau.update((niveau) => Math.max(1, niveau + delta));
  }
}
