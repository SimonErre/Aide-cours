import { Component } from '@angular/core';

// =============================================================
// Exercice 7.2 : La fiche de monstre
// Objectif : lire un paramètre de route et naviguer par le code.
// =============================================================

@Component({
  selector: 'app-detail-monstre',
  template: `
    <!-- TODO : fiche du monstre, ou "Monstre inconnu." -->
    <!-- TODO : bouton Retour au bestiaire -->
  `,
})
export class DetailMonstre {
  // TODO : input obligatoire "id" (rempli par le paramètre :id de l'URL)
  // TODO : computed monstre à partir de BestiaireService
  // TODO : méthode retour() avec Router.navigate
}
