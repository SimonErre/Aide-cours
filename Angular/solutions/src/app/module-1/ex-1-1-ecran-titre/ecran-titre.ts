import { Component } from '@angular/core';

@Component({
  selector: 'app-ecran-titre',
  template: `
    <pre>
==============================
   LA LEGENDE DU CODEUR
==============================</pre
    >
    <p>Appuie sur Start pour commencer</p>
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
