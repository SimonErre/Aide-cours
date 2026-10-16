import { computed, inject, linkedSignal, Service } from '@angular/core';

import { Categorie, Transaction } from '../models/transaction';
import { AuthService } from './auth-service';
import { Stockage } from './stockage';

const PREFIXE_CLE = 'mon-budget.transactions.';

/** A category total, for the dashboard breakdown. */
export interface TotalCategorie {
  categorie: Categorie;
  total: number;
  pourcentage: number;
}

/** Transactions of the logged-in user, saved per user in localStorage. */
@Service()
export class BudgetService {
  private readonly auth = inject(AuthService);
  private readonly stockage = inject(Stockage);

  /** Writable, and reset from storage whenever the logged-in user changes. */
  private readonly _transactions = linkedSignal<Transaction[]>(() => {
    const utilisateur = this.auth.utilisateur();
    return utilisateur ? (this.stockage.lire<Transaction[]>(this.cle()) ?? []) : [];
  });

  readonly transactions = this._transactions.asReadonly();

  readonly totalRevenus = computed(() => this.somme('revenu'));
  readonly totalDepenses = computed(() => this.somme('depense'));
  readonly solde = computed(() => this.totalRevenus() - this.totalDepenses());

  readonly depensesParCategorie = computed<TotalCategorie[]>(() => {
    const totaux = new Map<Categorie, number>();

    for (const t of this._transactions()) {
      if (t.type !== 'depense') {
        continue;
      }

      totaux.set(t.categorie, (totaux.get(t.categorie) ?? 0) + t.montant);
    }

    const totalDepenses = this.totalDepenses();

    return [...totaux]
      .map(([categorie, total]) => ({
        categorie,
        total,
        pourcentage: totalDepenses === 0 ? 0 : Math.round((total / totalDepenses) * 100),
      }))
      .sort((a, b) => b.total - a.total);
  });

  ajouter(transaction: Omit<Transaction, 'id'>) {
    const id = Math.max(0, ...this._transactions().map((t) => t.id)) + 1;
    this.modifier((liste) => [{ ...transaction, id }, ...liste]);
  }

  supprimer(id: number) {
    this.modifier((liste) => liste.filter((t) => t.id !== id));
  }

  private modifier(changement: (liste: Transaction[]) => Transaction[]) {
    this._transactions.update(changement);
    this.stockage.ecrire(this.cle(), this._transactions());
  }

  private somme(type: Transaction['type']): number {
    return this._transactions()
      .filter((t) => t.type === type)
      .reduce((total, t) => total + t.montant, 0);
  }

  private cle(): string {
    return PREFIXE_CLE + (this.auth.utilisateur()?.email ?? '');
  }
}
