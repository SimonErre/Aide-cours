import { Routes } from '@angular/router';

import { authGuard, inviteGuard } from './core/auth-guard';
import { Layout } from './layout/layout';
import { Login } from './pages/login/login';
import { NouvelleTransaction } from './pages/nouvelle-transaction/nouvelle-transaction';
import { PageIntrouvable } from './pages/page-introuvable/page-introuvable';
import { TableauDeBord } from './pages/tableau-de-bord/tableau-de-bord';
import { Transactions } from './pages/transactions/transactions';

export const routes: Routes = [
  { path: 'login', title: 'Connexion', component: Login, canActivate: [inviteGuard] },
  {
    path: '',
    component: Layout,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'tableau-de-bord', pathMatch: 'full' },
      { path: 'tableau-de-bord', title: 'Tableau de bord', component: TableauDeBord },
      { path: 'transactions', title: 'Transactions', component: Transactions },
      {
        path: 'transactions/nouvelle',
        title: 'Nouvelle transaction',
        component: NouvelleTransaction,
      },
    ],
  },
  { path: '**', title: 'Introuvable', component: PageIntrouvable },
];
