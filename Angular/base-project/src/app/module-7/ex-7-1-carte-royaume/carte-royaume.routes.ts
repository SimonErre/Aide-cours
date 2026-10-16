import { Routes } from '@angular/router';

import { Accueil } from './accueil';

export const CARTE_ROYAUME_ROUTES: Routes = [
  { path: '', component: Accueil },
  // TODO : titre d'onglet "Accueil" sur la route ci-dessus
  // TODO : 'taverne' -> Taverne, 'boutique' -> Boutique
  // TODO : 'auberge' redirige vers 'taverne'
  // TODO : '**' -> PageIntrouvable
];
