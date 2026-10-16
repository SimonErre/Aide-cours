import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-carte-monstre',
  template: `
    <h3>{{ nom() }}</h3>
    <p>PV : {{ pv() }}</p>
    <p>Rang : {{ rang() }}</p>
    <button (click)="attaque.emit(nom())">Attaquer</button>
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
export class CarteMonstre {
  readonly nom = input.required<string>();
  readonly pv = input.required<number>();
  readonly rang = input('Commun');

  readonly attaque = output<string>();
}
