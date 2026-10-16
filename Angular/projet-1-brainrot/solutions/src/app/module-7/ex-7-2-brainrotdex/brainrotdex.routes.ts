import { Routes } from '@angular/router';

import { DetailBrainrot } from './detail-brainrot';
import { ListeBrainrots } from './liste-brainrots';

export const BRAINROTDEX_ROUTES: Routes = [
  { path: '', redirectTo: 'brainrotdex', pathMatch: 'full' },
  {
    path: 'brainrotdex',
    children: [
      { path: '', component: ListeBrainrots },
      { path: ':id', component: DetailBrainrot },
    ],
  },
];
