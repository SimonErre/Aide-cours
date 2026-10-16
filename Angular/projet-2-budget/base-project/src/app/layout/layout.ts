import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// =============================================================
// Etape 4 : Le layout
// Objectif : un cadre commun à toutes les pages connectées.
// =============================================================

/** Frame of every logged-in page: header, navigation, content. */
@Component({
  // TODO : importe aussi RouterLink et RouterLinkActive
  imports: [RouterOutlet],
  selector: 'app-layout',
  template: `
    <header>
      <strong>Mon Budget</strong>
      <nav>
        <!-- TODO : liens Tableau de bord, Transactions, + Ajouter -->
      </nav>
      <!-- TODO : pseudo de l'utilisateur et bouton Déconnexion -->
    </header>

    <main>
      <router-outlet />
    </main>
  `,
  styles: `
    header {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      padding: 0.75rem 2rem;
      background: var(--primaire);
      color: white;
    }

    nav {
      display: flex;
      flex: 1;
      gap: 1rem;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    a.actif {
      font-weight: bold;
      text-decoration: underline;
    }

    main {
      max-width: 52rem;
      padding: 1.5rem 2rem;
    }
  `,
})
export class Layout {
  // TODO : injecte AuthService et Router
  // TODO : méthode deconnecter()
}
