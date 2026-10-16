import { Routes } from '@angular/router';

import { CreationProfil } from './creation-profil';
import { DetailObjet } from './detail-objet';
import { InventairePage } from './inventaire-page';
import { PageIntrouvable } from './page-introuvable';
import { Shop } from './shop';

export const PROJET_FINAL_ROUTES: Routes = [
  { path: '', component: CreationProfil },
  {
    path: 'shop',
    children: [
      { path: '', component: Shop },
      { path: ':id', component: DetailObjet },
    ],
  },
  { path: 'inventaire', component: InventairePage },
  { path: '**', component: PageIntrouvable },
];
