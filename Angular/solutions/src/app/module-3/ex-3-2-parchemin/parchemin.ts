import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-parchemin',
  template: `
    <label>
      Ecris ta formule :
      <input (input)="ecrire($event)" />
    </label>
    <p>Formule : {{ formule() }} ({{ formule().length }} caractères)</p>
  `,
})
export class Parchemin {
  protected readonly formule = signal('');

  protected ecrire(event: Event) {
    const champ = event.target as HTMLInputElement;
    this.formule.set(champ.value);
  }
}
