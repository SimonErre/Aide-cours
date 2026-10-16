import { Routes } from '@angular/router';

import { ListeMonstres } from './liste-monstres';

export const BESTIAIRE_ROUTES: Routes = [
  { path: '', component: ListeMonstres },
  // TODO : '' doit rediriger vers 'bestiaire'
  // TODO : 'bestiaire' -> ListeMonstres, 'bestiaire/:id' -> DetailMonstre
];
