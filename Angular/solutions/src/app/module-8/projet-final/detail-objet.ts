import { Component, computed, inject, input, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SelecteurQuantite } from '../../module-4/ex-4-3-commande/selecteur-quantite';
import { CatalogueService } from './catalogue-service';
import { InventaireService } from './inventaire-service';

@Component({
  imports: [SelecteurQuantite],
  selector: 'app-detail-objet',
  template: `
    @if (objet(); as objet) {
      <h2>{{ objet.nom }}</h2>
      <p>
        Catégorie : {{ objet.categorie }} | Taille : {{ objet.taille }} Go | Prix :
        {{ objet.prix }} crédits
      </p>

      <app-selecteur-quantite [(quantite)]="quantite" />
      <span>Total : {{ total() }} crédits</span>
      <br />
      <button [disabled]="!peutAcheter()" (click)="acheter()">Acheter</button>
      @if (!peutAcheter()) {
        <p>Pas assez de crédits ou stockage plein ({{ inventaire.stockageMax }} Go max).</p>
      }
    } @else {
      <p>Objet inconnu.</p>
    }
    <br />
    <button (click)="retour()">Retour au shop</button>
  `,
})
export class DetailObjet {
  /** Filled from the ':id' route param thanks to withComponentInputBinding(). */
  readonly id = input.required<string>();

  protected readonly inventaire = inject(InventaireService);
  private readonly catalogue = inject(CatalogueService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly quantite = signal(1);
  protected readonly objet = computed(() => this.catalogue.trouver(Number(this.id())));
  protected readonly total = computed(() => (this.objet()?.prix ?? 0) * this.quantite());

  protected readonly peutAcheter = computed(() => {
    const objet = this.objet();
    return objet !== undefined && this.inventaire.peutAcheter(objet, this.quantite());
  });

  protected acheter() {
    const objet = this.objet();

    if (!objet) {
      return;
    }

    this.inventaire.acheter(objet, this.quantite());
    this.quantite.set(1);
  }

  protected retour() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
