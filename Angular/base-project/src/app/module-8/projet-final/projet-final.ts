import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// =============================================================
// Module 8 : Projet final, Le Marché de l'Aventurier
// =============================================================

/** Mini-app root: permanent header, navigation and page outlet. */
@Component({
  imports: [RouterOutlet],
  selector: 'app-projet-final',
  template: `
    <header>
      <!-- TODO : nom du héros, or restant, nombre d'objets dans le sac -->
      <!-- TODO : liens Accueil, Marché, Sac -->
    </header>
    <hr />
    <router-outlet />
  `,
})
export class ProjetFinal {}
