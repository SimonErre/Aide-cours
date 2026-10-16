import { Component } from '@angular/core';

// =============================================================
// Exercice 3.4 : La playlist
// Objectif : @for avec track, $index et @empty.
// =============================================================

interface Son {
  id: number;
  titre: string;
  duree: number;
}

@Component({
  selector: 'app-playlist',
  template: `
    <!-- TODO : liste des sons avec @for (numéro, titre, durée, bouton Supprimer) -->
    <!-- TODO : @empty -> "Ta playlist est vide." -->
    <!-- TODO : "Durée totale : X s" -->
  `,
})
export class Playlist {
  // TODO : signal<Son[]> avec Tralalero Tralala (45 s), Tung Tung Tung Sahur (30 s), Brr Brr Patapim (20 s)
  // TODO : computed dureeTotale
  // TODO : méthode supprimer(id: number)
}
