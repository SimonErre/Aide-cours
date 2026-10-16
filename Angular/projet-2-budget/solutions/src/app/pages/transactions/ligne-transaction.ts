import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { Transaction } from '../../models/transaction';

/** One row of the transaction list. Deleting is the parent's job. */
@Component({
  imports: [CurrencyPipe, DatePipe],
  selector: 'app-ligne-transaction',
  template: `
    <span>{{ transaction().date | date: 'dd/MM/yyyy' }}</span>
    <span>{{ transaction().libelle }}</span>
    <span class="categorie">{{ transaction().categorie }}</span>
    <strong [class]="transaction().type">
      {{ transaction().type === 'depense' ? '-' : '+'
      }}{{ transaction().montant | currency: 'EUR' }}
    </strong>
    <button (click)="supprimer.emit(transaction().id)">🗑️</button>
  `,
  styles: `
    :host {
      display: grid;
      grid-template-columns: 6rem 1fr 6rem 8rem 2.5rem;
      gap: 1rem;
      align-items: center;
      padding: 0.5rem 0;
      border-bottom: 1px solid var(--gris);
    }

    .categorie {
      font-size: 0.85rem;
      color: #666;
    }

    strong {
      text-align: right;
    }
  `,
})
export class LigneTransaction {
  readonly transaction = input.required<Transaction>();
  readonly supprimer = output<number>();
}
