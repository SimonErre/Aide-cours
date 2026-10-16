import { Component } from '@angular/core';

// =============================================================
// Exercice 3.4 : L'inventaire
// Objectif : @for avec track, $index et @empty.
// =============================================================

interface Objet {
  id: number;
  nom: string;
  poids: number;
}

@Component({
  selector: 'app-inventaire',
  template: `
    <!-- TODO : liste des objets avec @for (numéro, nom, poids, bouton Jeter) -->
    <!-- TODO : @empty -> "Ton sac est vide." -->
    <!-- TODO : "Poids total : X kg" -->
  `,
})
export class Inventaire {
  // TODO : signal<Objet[]> avec Epée (3 kg), Bouclier (5 kg), Potion (0.5 kg)
  // TODO : computed poidsTotal
  // TODO : méthode jeter(id: number)
}
