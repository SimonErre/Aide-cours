import { Routes } from '@angular/router';

import { CreationHeros } from './creation-heros';
import { DetailObjet } from './detail-objet';
import { Marche } from './marche';
import { PageIntrouvable } from './page-introuvable';
import { SacPage } from './sac-page';

export const PROJET_FINAL_ROUTES: Routes = [
  { path: '', component: CreationHeros },
  {
    path: 'marche',
    children: [
      { path: '', component: Marche },
      { path: ':id', component: DetailObjet },
    ],
  },
  { path: 'sac', component: SacPage },
  { path: '**', component: PageIntrouvable },
];
