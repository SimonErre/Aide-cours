import { Component, input, output } from '@angular/core';

import { Objet } from './objet';

@Component({
  selector: 'app-carte-objet',
  template: `
    <h3>{{ objet().nom }}</h3>
    <p>{{ objet().prix }} crédits | {{ objet().taille }} Go</p>
    <button (click)="voir.emit(objet().id)">Voir</button>
  `,
  styles: `
    :host {
      display: inline-block;
      margin: 0.5rem;
      padding: 0.5rem 1rem;
      border: 1px solid #555;
      border-radius: 6px;
    }
  `,
})
export class CarteObjet {
  readonly objet = input.required<Objet>();
  readonly voir = output<number>();
}
