import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { CarteObjet } from './carte-objet';
import { CatalogueService } from './catalogue-service';
import { HerosService } from './heros-service';
import { Categorie } from './objet';

type Filtre = Categorie | 'Toutes';

@Component({
  imports: [CarteObjet, RouterLink],
  selector: 'app-marche',
  template: `
    @if (!heros.estCree()) {
      <p>Crée d'abord ton héros ! <a routerLink="..">Création</a></p>
    } @else {
      <h2>Le marché</h2>
      @for (f of filtres; track f) {
        <button [class.actif]="filtre() === f" (click)="filtre.set(f)">{{ f }}</button>
      }

      <div>
        @for (objet of objetsFiltres(); track objet.id) {
          <app-carte-objet [objet]="objet" (voir)="voir($event)" />
        }
      </div>
    }
  `,
  styles: `
    .actif {
      font-weight: bold;
    }
  `,
})
export class Marche {
  protected readonly heros = inject(HerosService);
  private readonly catalogue = inject(CatalogueService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly filtres: Filtre[] = ['Toutes', 'Armes', 'Armures', 'Potions'];
  protected readonly filtre = signal<Filtre>('Toutes');

  protected readonly objetsFiltres = computed(() => {
    const filtre = this.filtre();

    if (filtre === 'Toutes') {
      return this.catalogue.objets;
    }

    return this.catalogue.objets.filter((objet) => objet.categorie === filtre);
  });

  protected voir(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
