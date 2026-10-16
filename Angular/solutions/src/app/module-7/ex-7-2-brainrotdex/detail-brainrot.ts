import { Component, computed, inject, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BrainrotdexService } from './brainrotdex-service';

@Component({
  selector: 'app-detail-brainrot',
  template: `
    @if (brainrot(); as brainrot) {
      <h2>{{ brainrot.nom }} ({{ brainrot.aura }} d'aura)</h2>
      <p>{{ brainrot.description }}</p>
    } @else {
      <p>Brainrot inconnu.</p>
    }
    <button (click)="retour()">Retour au Brainrotdex</button>
  `,
})
export class DetailBrainrot {
  /** Filled from the ':id' route param thanks to withComponentInputBinding(). */
  readonly id = input.required<string>();

  private readonly brainrotdex = inject(BrainrotdexService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly brainrot = computed(() => this.brainrotdex.trouver(Number(this.id())));

  protected retour() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
