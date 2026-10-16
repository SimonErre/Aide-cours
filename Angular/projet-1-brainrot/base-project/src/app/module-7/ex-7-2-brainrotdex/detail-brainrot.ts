import { Component } from '@angular/core';

// =============================================================
// Exercice 7.2 : Le Brainrotdex
// Objectif : lire un paramètre de route et naviguer par le code.
// =============================================================

@Component({
  selector: 'app-detail-brainrot',
  template: `
    <!-- TODO : fiche du brainrot, ou "Brainrot inconnu." -->
    <!-- TODO : bouton Retour au Brainrotdex -->
  `,
})
export class DetailBrainrot {
  // TODO : input obligatoire "id" (rempli par le paramètre :id de l'URL)
  // TODO : computed brainrot à partir de BrainrotdexService
  // TODO : méthode retour() avec Router.navigate
}
