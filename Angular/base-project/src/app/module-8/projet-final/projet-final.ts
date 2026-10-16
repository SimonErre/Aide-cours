import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// =============================================================
// Module 8 : Projet final, Le Brainrot Shop
// =============================================================

/** Mini-app root: permanent header, navigation and page outlet. */
@Component({
  imports: [RouterOutlet],
  selector: 'app-projet-final',
  template: `
    <header>
      <!-- TODO : pseudo et team, crédits restants, nombre d'objets dans l'inventaire -->
      <!-- TODO : liens Profil, Shop, Inventaire -->
    </header>
    <hr />
    <router-outlet />
  `,
})
export class ProjetFinal {}
