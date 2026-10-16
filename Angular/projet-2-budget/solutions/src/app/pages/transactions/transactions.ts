import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BudgetService } from '../../core/budget-service';
import { TypeTransaction } from '../../models/transaction';
import { LigneTransaction } from './ligne-transaction';

type Filtre = TypeTransaction | 'tout';

@Component({
  imports: [LigneTransaction, RouterLink],
  selector: 'app-transactions',
  template: `
    <h2>Transactions</h2>

    <div class="filtres">
      @for (f of filtres; track f.valeur) {
        <button [class.actif]="filtre() === f.valeur" (click)="filtre.set(f.valeur)">
          {{ f.libelle }}
        </button>
      }
      <input placeholder="Rechercher..." (input)="rechercher($event)" />
    </div>

    <section class="carte">
      @for (transaction of transactionsFiltrees(); track transaction.id) {
        <app-ligne-transaction [transaction]="transaction" (supprimer)="budget.supprimer($event)" />
      } @empty {
        <p>Aucune transaction. <a routerLink="/transactions/nouvelle">Ajoute la première</a>.</p>
      }
    </section>
  `,
  styles: `
    .filtres {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .actif {
      font-weight: bold;
    }

    input {
      margin-left: auto;
    }
  `,
})
export class Transactions {
  protected readonly budget = inject(BudgetService);

  protected readonly filtres: { valeur: Filtre; libelle: string }[] = [
    { valeur: 'tout', libelle: 'Tout' },
    { valeur: 'revenu', libelle: 'Revenus' },
    { valeur: 'depense', libelle: 'Dépenses' },
  ];

  protected readonly filtre = signal<Filtre>('tout');
  protected readonly recherche = signal('');

  protected readonly transactionsFiltrees = computed(() => {
    const filtre = this.filtre();
    const recherche = this.recherche().toLowerCase();

    return this.budget
      .transactions()
      .filter((t) => filtre === 'tout' || t.type === filtre)
      .filter((t) => t.libelle.toLowerCase().includes(recherche))
      .sort((a, b) => b.date.localeCompare(a.date));
  });

  protected rechercher(event: Event) {
    this.recherche.set((event.target as HTMLInputElement).value);
  }
}
