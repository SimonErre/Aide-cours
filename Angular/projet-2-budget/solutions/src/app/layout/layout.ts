import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { AuthService } from '../core/auth-service';

/** Frame of every logged-in page: header, navigation, content. */
@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-layout',
  template: `
    <header>
      <strong>Mon Budget</strong>
      <nav>
        <a routerLink="/tableau-de-bord" routerLinkActive="actif">Tableau de bord</a>
        <a
          routerLink="/transactions"
          routerLinkActive="actif"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          Transactions
        </a>
        <a routerLink="/transactions/nouvelle" routerLinkActive="actif">+ Ajouter</a>
      </nav>
      <span>{{ auth.utilisateur()?.pseudo }}</span>
      <button (click)="deconnecter()">Déconnexion</button>
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
  protected readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  protected deconnecter() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
