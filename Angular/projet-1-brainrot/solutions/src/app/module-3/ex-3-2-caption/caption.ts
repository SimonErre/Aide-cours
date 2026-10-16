import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-caption',
  template: `
    <label>
      Ecris ta caption :
      <input (input)="ecrire($event)" />
    </label>
    <p>Caption : {{ caption() }} ({{ caption().length }} caractères)</p>
  `,
})
export class Caption {
  protected readonly caption = signal('');

  protected ecrire(event: Event) {
    const champ = event.target as HTMLInputElement;
    this.caption.set(champ.value);
  }
}
