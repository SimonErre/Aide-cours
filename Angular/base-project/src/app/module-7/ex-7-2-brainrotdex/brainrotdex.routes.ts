import { Routes } from '@angular/router';

import { ListeBrainrots } from './liste-brainrots';

export const BRAINROTDEX_ROUTES: Routes = [
  { path: '', component: ListeBrainrots },
  // TODO : '' doit rediriger vers 'brainrotdex'
  // TODO : 'brainrotdex' -> ListeBrainrots, 'brainrotdex/:id' -> DetailBrainrot
];
