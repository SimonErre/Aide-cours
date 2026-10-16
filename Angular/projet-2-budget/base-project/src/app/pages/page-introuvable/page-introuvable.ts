import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-page-introuvable',
  template: `
    <div class="carte">
      <h2>404 : page introuvable.</h2>
      <a routerLink="/">Retour à l'accueil</a>
    </div>
  `,
  styles: `
    :host {
      display: block;
      padding: 2rem;
    }
  `,
})
export class PageIntrouvable {}
