import { Component } from '@angular/core';

@Component({
  selector: 'app-ecran-titre',
  template: `
    <pre>
==============================
     SKIBIDI  CODEUR
==============================</pre>
    <p>Appuie sur Start pour farmer de l'aura</p>
  `,
  styles: `
    :host {
      display: block;
      text-align: center;
    }

    pre {
      font-size: 1.5rem;
    }
  `,
})
export class EcranTitre {}
