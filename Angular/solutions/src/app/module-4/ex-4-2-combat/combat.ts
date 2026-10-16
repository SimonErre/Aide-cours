import { Component, signal } from '@angular/core';

import { CarteMonstre } from './carte-monstre';

const DEGATS = 10;

interface Monstre {
  nom: string;
  pv: number;
  rang: string;
}

@Component({
  imports: [CarteMonstre],
  selector: 'app-combat',
  template: `
    @for (monstre of monstres(); track monstre.nom) {
      <app-carte-monstre
        [nom]="monstre.nom"
        [pv]="monstre.pv"
        [rang]="monstre.rang"
        (attaque)="attaquer($event)"
      />
    }

    <h3>Journal de combat :</h3>
    <ul>
      @for (ligne of journal(); track $index) {
        <li>{{ ligne }}</li>
      }
    </ul>
  `,
})
export class Combat {
  protected readonly monstres = signal<Monstre[]>([
    { nom: 'Gobelin', pv: 30, rang: 'Commun' },
    { nom: 'Troll', pv: 120, rang: 'Elite' },
    { nom: 'Dragon', pv: 500, rang: 'Boss' },
  ]);

  protected readonly journal = signal<string[]>([]);

  protected attaquer(nom: string) {
    this.journal.update((lignes) => [...lignes, `Tu attaques ${nom} !`]);

    this.monstres.update((liste) =>
      liste.map((m) => (m.nom === nom ? { ...m, pv: Math.max(0, m.pv - DEGATS) } : m)),
    );
  }
}
