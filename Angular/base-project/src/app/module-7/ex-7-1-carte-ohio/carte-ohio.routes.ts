import { Routes } from '@angular/router';

import { Accueil } from './accueil';

export const CARTE_OHIO_ROUTES: Routes = [
  { path: '', component: Accueil },
  // TODO : titre d'onglet "Accueil" sur la route ci-dessus
  // TODO : 'cafe' -> Cafe, 'boutique' -> Boutique
  // TODO : 'coffee-shop' redirige vers 'cafe'
  // TODO : '**' -> PageIntrouvable
];
