import { Component, signal } from '@angular/core';

import { CarteBrainrot } from './carte-brainrot';

const AURA_PERDUE = 10;

interface Brainrot {
  nom: string;
  aura: number;
  rarete: string;
}

@Component({
  imports: [CarteBrainrot],
  selector: 'app-battle',
  template: `
    @for (brainrot of brainrots(); track brainrot.nom) {
      <app-carte-brainrot
        [nom]="brainrot.nom"
        [aura]="brainrot.aura"
        [rarete]="brainrot.rarete"
        (clash)="clasher($event)"
      />
    }

    <h3>Historique de la battle :</h3>
    <ul>
      @for (ligne of historique(); track $index) {
        <li>{{ ligne }}</li>
      }
    </ul>
  `,
})
export class Battle {
  protected readonly brainrots = signal<Brainrot[]>([
    { nom: 'Brr Brr Patapim', aura: 30, rarete: 'Commun' },
    { nom: 'Chimpanzini Bananini', aura: 120, rarete: 'Epique' },
    { nom: 'Bombardiro Crocodilo', aura: 500, rarete: 'Légendaire' },
  ]);

  protected readonly historique = signal<string[]>([]);

  protected clasher(nom: string) {
    this.historique.update((lignes) => [...lignes, `Tu clashes ${nom} !`]);

    this.brainrots.update((liste) =>
      liste.map((b) => (b.nom === nom ? { ...b, aura: Math.max(0, b.aura - AURA_PERDUE) } : b)),
    );
  }
}
