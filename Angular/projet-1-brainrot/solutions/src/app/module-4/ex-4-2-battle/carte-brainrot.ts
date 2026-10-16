import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-carte-brainrot',
  template: `
    <h3>{{ nom() }}</h3>
    <p>Aura : {{ aura() }}</p>
    <p>Rareté : {{ rarete() }}</p>
    <button (click)="clash.emit(nom())">Clasher</button>
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
export class CarteBrainrot {
  readonly nom = input.required<string>();
  readonly aura = input.required<number>();
  readonly rarete = input('Commun');

  readonly clash = output<string>();
}
