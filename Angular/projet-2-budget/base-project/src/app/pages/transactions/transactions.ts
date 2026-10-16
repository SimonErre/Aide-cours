import { Component } from '@angular/core';

// =============================================================
// Etape 7 : La liste des transactions
// Objectif : @for, composant enfant (input / output), filtres avec computed.
// =============================================================

@Component({
  imports: [],
  selector: 'app-transactions',
  template: `
    <h2>Transactions</h2>

    <!-- TODO : boutons Tout / Revenus / Dépenses et champ Rechercher -->

    <section class="carte">
      <!-- TODO : une <app-ligne-transaction> par transaction filtrée, @empty si aucune -->
    </section>
  `,
})
export class Transactions {
  // TODO : injecte BudgetService
  // TODO : signals filtre et recherche, computed transactionsFiltrees (triées par date)
}
