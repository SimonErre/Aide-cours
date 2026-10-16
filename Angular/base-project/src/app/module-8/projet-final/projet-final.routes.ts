import { Routes } from '@angular/router';

import { CreationHeros } from './creation-heros';

export const PROJET_FINAL_ROUTES: Routes = [
  { path: '', component: CreationHeros },
  // TODO : 'marche', 'marche/:id', 'sac', '**'
];
