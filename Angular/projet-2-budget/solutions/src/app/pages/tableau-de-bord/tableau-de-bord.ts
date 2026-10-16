import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AuthService } from '../../core/auth-service';
import { BudgetService } from '../../core/budget-service';

@Component({
  imports: [CurrencyPipe, RouterLink],
  selector: 'app-tableau-de-bord',
  template: `
    <h2>Bonjour {{ auth.utilisateur()?.pseudo }}</h2>

    <section class="resume">
      <div class="carte">
        <p>Solde</p>
        <strong [class.revenu]="budget.solde() >= 0" [class.depense]="budget.solde() < 0">
          {{ budget.solde() | currency: 'EUR' }}
        </strong>
      </div>
      <div class="carte">
        <p>Revenus</p>
        <strong class="revenu">{{ budget.totalRevenus() | currency: 'EUR' }}</strong>
      </div>
      <div class="carte">
        <p>Dépenses</p>
        <strong class="depense">{{ budget.totalDepenses() | currency: 'EUR' }}</strong>
      </div>
    </section>

    @if (budget.solde() < 0) {
      <p class="alerte">Attention : ton solde est négatif.</p>
    }

    <section class="carte">
      <h3>Dépenses par catégorie</h3>
      @for (ligne of budget.depensesParCategorie(); track ligne.categorie) {
        <div class="ligne">
          <span>{{ ligne.categorie }}</span>
          <div class="barre"><div [style.width.%]="ligne.pourcentage"></div></div>
          <span>{{ ligne.total | currency: 'EUR' }} ({{ ligne.pourcentage }} %)</span>
        </div>
      } @empty {
        <p>
          Aucune dépense pour l'instant.
          <a routerLink="/transactions/nouvelle">Ajoute une transaction</a>.
        </p>
      }
    </section>
  `,
  styles: `
    .resume {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .resume p {
      margin: 0;
    }

    .resume strong {
      font-size: 1.5rem;
    }

    .alerte {
      color: var(--rouge);
      font-weight: bold;
    }

    .ligne {
      display: grid;
      grid-template-columns: 7rem 1fr 11rem;
      gap: 1rem;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .barre {
      height: 0.75rem;
      background: var(--gris);
      border-radius: 4px;
    }

    .barre div {
      height: 100%;
      background: var(--primaire);
      border-radius: 4px;
    }
  `,
})
export class TableauDeBord {
  protected readonly auth = inject(AuthService);
  protected readonly budget = inject(BudgetService);
}
