import { Component, computed, signal } from '@angular/core';

interface Son {
  id: number;
  titre: string;
  duree: number;
}

@Component({
  selector: 'app-playlist',
  template: `
    <ul>
      @for (son of sons(); track son.id; let i = $index) {
        <li>
          {{ i + 1 }}. {{ son.titre }} ({{ son.duree }} s)
          <button (click)="supprimer(son.id)">Supprimer</button>
        </li>
      } @empty {
        <li>Ta playlist est vide.</li>
      }
    </ul>
    <p>Durée totale : {{ dureeTotale() }} s</p>
  `,
})
export class Playlist {
  protected readonly sons = signal<Son[]>([
    { id: 1, titre: 'Tralalero Tralala', duree: 45 },
    { id: 2, titre: 'Tung Tung Tung Sahur', duree: 30 },
    { id: 3, titre: 'Brr Brr Patapim', duree: 20 },
  ]);

  protected readonly dureeTotale = computed(() =>
    this.sons().reduce((total, son) => total + son.duree, 0),
  );

  protected supprimer(id: number) {
    this.sons.update((liste) => liste.filter((son) => son.id !== id));
  }
}
