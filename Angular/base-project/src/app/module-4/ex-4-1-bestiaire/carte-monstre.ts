import { Component } from '@angular/core';

@Component({
  selector: 'app-carte-monstre',
  template: `
    <!-- TODO : affiche le nom, les PV et le rang -->
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
  // TODO : input obligatoire "nom" (string)
  // TODO : input obligatoire "pv" (number)
  // TODO : input optionnel "rang", valeur par défaut 'Commun'
}
