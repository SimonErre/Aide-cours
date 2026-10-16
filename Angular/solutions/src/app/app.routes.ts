import { Route, Routes } from '@angular/router';

import { EcranTitre } from './module-1/ex-1-1-ecran-titre/ecran-titre';
import { FicheHeros } from './module-1/ex-1-2-fiche-heros/fiche-heros';
import { Taverne } from './module-1/ex-1-3-taverne/taverne';
import { SacPotions } from './module-2/ex-2-1-sac-potions/sac-potions';
import { BarreDeVie } from './module-2/ex-2-2-barre-de-vie/barre-de-vie';
import { NomDuHeros } from './module-2/ex-2-3-nom-du-heros/nom-du-heros';
import { Forge } from './module-3/ex-3-1-forge/forge';
import { Parchemin } from './module-3/ex-3-2-parchemin/parchemin';
import { Videur } from './module-3/ex-3-3-videur/videur';
import { Inventaire } from './module-3/ex-3-4-inventaire/inventaire';
import { ChoixClasse } from './module-3/ex-3-5-choix-classe/choix-classe';
import { Bestiaire } from './module-4/ex-4-1-bestiaire/bestiaire';
import { Combat } from './module-4/ex-4-2-combat/combat';
import { Comptoir } from './module-4/ex-4-3-comptoir/comptoir';
import { InscriptionGuilde } from './module-5/ex-5-1-inscription-guilde/inscription-guilde';
import { Facture } from './module-6/ex-6-1-facture/facture';
import { SalleDuCoffre } from './module-6/ex-6-2-coffre/salle-du-coffre';
import { CarteRoyaume } from './module-7/ex-7-1-carte-royaume/carte-royaume';
import { CARTE_ROYAUME_ROUTES } from './module-7/ex-7-1-carte-royaume/carte-royaume.routes';
import { BESTIAIRE_ROUTES } from './module-7/ex-7-2-bestiaire/bestiaire.routes';
import { ProjetFinal } from './module-8/projet-final/projet-final';
import { PROJET_FINAL_ROUTES } from './module-8/projet-final/projet-final.routes';

/** One route per exercise. The `title` is shown in the side menu. */
export const EXERCICES: Route[] = [
  { path: 'ex-1-1', title: '1.1 Ecran-titre', component: EcranTitre },
  { path: 'ex-1-2', title: '1.2 Fiche du héros', component: FicheHeros },
  { path: 'ex-1-3', title: '1.3 La taverne', component: Taverne },
  { path: 'ex-2-1', title: '2.1 Sac de potions', component: SacPotions },
  { path: 'ex-2-2', title: '2.2 Barre de vie', component: BarreDeVie },
  { path: 'ex-2-3', title: '2.3 Nom du héros', component: NomDuHeros },
  { path: 'ex-3-1', title: '3.1 La forge', component: Forge },
  { path: 'ex-3-2', title: '3.2 Le parchemin', component: Parchemin },
  { path: 'ex-3-3', title: '3.3 Le videur', component: Videur },
  { path: 'ex-3-4', title: '3.4 Inventaire', component: Inventaire },
  { path: 'ex-3-5', title: '3.5 Choix de classe', component: ChoixClasse },
  { path: 'ex-4-1', title: '4.1 Bestiaire', component: Bestiaire },
  { path: 'ex-4-2', title: '4.2 Combat', component: Combat },
  { path: 'ex-4-3', title: '4.3 Comptoir', component: Comptoir },
  { path: 'ex-5-1', title: '5.1 Inscription guilde', component: InscriptionGuilde },
  { path: 'ex-6-1', title: '6.1 Facture', component: Facture },
  { path: 'ex-6-2', title: '6.2 Coffre partagé', component: SalleDuCoffre },
  {
    path: 'ex-7-1',
    title: '7.1 Carte du royaume',
    component: CarteRoyaume,
    children: CARTE_ROYAUME_ROUTES,
  },
  { path: 'ex-7-2', title: '7.2 Fiche de monstre', children: BESTIAIRE_ROUTES },
  {
    path: 'ex-8',
    title: '8 Projet final',
    component: ProjetFinal,
    children: PROJET_FINAL_ROUTES,
  },
];

export const routes: Routes = [
  { path: '', redirectTo: 'ex-1-1', pathMatch: 'full' },
  ...EXERCICES,
];
