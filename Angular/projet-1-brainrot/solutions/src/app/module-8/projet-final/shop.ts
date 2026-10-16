import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { CarteObjet } from './carte-objet';
import { CatalogueService } from './catalogue-service';
import { ProfilService } from './profil-service';
import { Categorie } from './objet';

type Filtre = Categorie | 'Toutes';

@Component({
  imports: [CarteObjet, RouterLink],
  selector: 'app-shop',
  template: `
    @if (!profil.estCree()) {
      <p>Crée d'abord ton profil ! <a routerLink="..">Création du profil</a></p>
    } @else {
      <h2>🛒 Le Brainrot Shop</h2>
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
export class Shop {
  protected readonly profil = inject(ProfilService);
  private readonly catalogue = inject(CatalogueService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly filtres: Filtre[] = ['Toutes', 'Skins', 'Emotes', 'Boosts'];
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
