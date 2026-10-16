import { Routes } from '@angular/router';

import { Accueil } from './accueil';
import { Boutique } from './boutique';
import { PageIntrouvable } from './page-introuvable';
import { Taverne } from './taverne';

export const CARTE_ROYAUME_ROUTES: Routes = [
  { path: '', title: 'Accueil', component: Accueil },
  { path: 'taverne', title: 'Taverne', component: Taverne },
  { path: 'boutique', title: 'Boutique', component: Boutique },
  { path: 'auberge', redirectTo: 'taverne' },
  { path: '**', title: 'Introuvable', component: PageIntrouvable },
];
