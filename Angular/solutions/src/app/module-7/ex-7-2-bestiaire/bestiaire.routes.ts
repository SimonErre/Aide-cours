import { Routes } from '@angular/router';

import { DetailMonstre } from './detail-monstre';
import { ListeMonstres } from './liste-monstres';

export const BESTIAIRE_ROUTES: Routes = [
  { path: '', redirectTo: 'bestiaire', pathMatch: 'full' },
  {
    path: 'bestiaire',
    children: [
      { path: '', component: ListeMonstres },
      { path: ':id', component: DetailMonstre },
    ],
  },
];
