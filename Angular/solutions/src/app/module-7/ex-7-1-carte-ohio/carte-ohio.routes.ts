import { Routes } from '@angular/router';

import { Accueil } from './accueil';
import { Boutique } from './boutique';
import { Cafe } from './cafe';
import { PageIntrouvable } from './page-introuvable';

export const CARTE_OHIO_ROUTES: Routes = [
  { path: '', title: 'Accueil', component: Accueil },
  { path: 'cafe', title: 'Café', component: Cafe },
  { path: 'boutique', title: 'Boutique', component: Boutique },
  { path: 'coffee-shop', redirectTo: 'cafe' },
  { path: '**', title: 'Introuvable', component: PageIntrouvable },
];
