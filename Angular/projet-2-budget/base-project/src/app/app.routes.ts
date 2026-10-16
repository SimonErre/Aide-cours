import { Routes } from '@angular/router';

import { Layout } from './layout/layout';
import { Login } from './pages/login/login';
import { NouvelleTransaction } from './pages/nouvelle-transaction/nouvelle-transaction';
import { PageIntrouvable } from './pages/page-introuvable/page-introuvable';
import { TableauDeBord } from './pages/tableau-de-bord/tableau-de-bord';
import { Transactions } from './pages/transactions/transactions';

// TODO (étape 3) : protège 'login' avec inviteGuard et le layout avec authGuard (canActivate)
export const routes: Routes = [
  { path: 'login', title: 'Connexion', component: Login },
  {
    path: '',
    component: Layout,
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
