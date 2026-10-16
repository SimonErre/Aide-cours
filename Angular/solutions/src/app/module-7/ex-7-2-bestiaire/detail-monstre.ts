import { Component, computed, inject, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BestiaireService } from './bestiaire-service';

@Component({
  selector: 'app-detail-monstre',
  template: `
    @if (monstre(); as monstre) {
      <h2>{{ monstre.nom }} ({{ monstre.pv }} PV)</h2>
      <p>{{ monstre.description }}</p>
    } @else {
      <p>Monstre inconnu.</p>
    }
    <button (click)="retour()">Retour au bestiaire</button>
  `,
})
export class DetailMonstre {
  /** Filled from the ':id' route param thanks to withComponentInputBinding(). */
  readonly id = input.required<string>();

  private readonly bestiaire = inject(BestiaireService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly monstre = computed(() => this.bestiaire.trouver(Number(this.id())));

  protected retour() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
