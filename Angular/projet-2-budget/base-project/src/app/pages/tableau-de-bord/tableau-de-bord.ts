import { Component } from '@angular/core';

// =============================================================
// Etape 8 : Le tableau de bord
// Objectif : afficher les totaux avec les pipes, style dynamique.
// =============================================================
@Component({
  imports: [],
  selector: 'app-tableau-de-bord',
  template: `
    <!-- TODO : "Bonjour <pseudo>" -->

    <section class="resume">
      <!-- TODO : trois cartes Solde, Revenus, Dépenses (pipe currency: 'EUR') -->
    </section>

    <!-- TODO : alerte si le solde est négatif -->

    <section class="carte">
      <h3>Dépenses par catégorie</h3>
      <!-- TODO : une ligne par catégorie avec une barre [style.width.%] -->
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
  // TODO : injecte AuthService et BudgetService
}
