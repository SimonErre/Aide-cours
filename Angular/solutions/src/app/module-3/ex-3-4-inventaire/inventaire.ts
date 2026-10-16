import { Component, computed, signal } from '@angular/core';

interface Objet {
  id: number;
  nom: string;
  poids: number;
}

@Component({
  selector: 'app-inventaire',
  template: `
    <ul>
      @for (objet of objets(); track objet.id; let i = $index) {
        <li>
          {{ i + 1 }}. {{ objet.nom }} ({{ objet.poids }} kg)
          <button (click)="jeter(objet.id)">Jeter</button>
        </li>
      } @empty {
        <li>Ton sac est vide.</li>
      }
    </ul>
    <p>Poids total : {{ poidsTotal() }} kg</p>
  `,
})
export class Inventaire {
  protected readonly objets = signal<Objet[]>([
    { id: 1, nom: 'Epée', poids: 3 },
    { id: 2, nom: 'Bouclier', poids: 5 },
    { id: 3, nom: 'Potion', poids: 0.5 },
  ]);

  protected readonly poidsTotal = computed(() =>
    this.objets().reduce((total, objet) => total + objet.poids, 0),
  );

  protected jeter(id: number) {
    this.objets.update((liste) => liste.filter((objet) => objet.id !== id));
  }
}
