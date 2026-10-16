import { Component } from '@angular/core';

@Component({
  selector: 'app-carte-brainrot',
  template: `
    <!-- TODO : affiche le nom, l'aura et la rareté -->
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
  // TODO : input obligatoire "nom" (string)
  // TODO : input obligatoire "aura" (number)
  // TODO : input optionnel "rarete", valeur par défaut 'Commun'
}
