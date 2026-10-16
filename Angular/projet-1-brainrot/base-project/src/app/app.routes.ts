import { Route, Routes } from '@angular/router';

import { EcranTitre } from './module-1/ex-1-1-ecran-titre/ecran-titre';
import { FicheBrainrot } from './module-1/ex-1-2-fiche-brainrot/fiche-brainrot';
import { CafeOhio } from './module-1/ex-1-3-cafe-ohio/cafe-ohio';
import { ReserveBananes } from './module-2/ex-2-1-reserve-bananes/reserve-bananes';
import { JaugeAura } from './module-2/ex-2-2-jauge-aura/jauge-aura';
import { NomDuBrainrot } from './module-2/ex-2-3-nom-du-brainrot/nom-du-brainrot';
import { BoutiqueSkins } from './module-3/ex-3-1-boutique-skins/boutique-skins';
import { Caption } from './module-3/ex-3-2-caption/caption';
import { Videur } from './module-3/ex-3-3-videur/videur';
import { Playlist } from './module-3/ex-3-4-playlist/playlist';
import { ChoixTeam } from './module-3/ex-3-5-choix-team/choix-team';
import { Collection } from './module-4/ex-4-1-collection/collection';
import { Battle } from './module-4/ex-4-2-battle/battle';
import { Commande } from './module-4/ex-4-3-commande/commande';
import { InscriptionSquad } from './module-5/ex-5-1-inscription-squad/inscription-squad';
import { Ticket } from './module-6/ex-6-1-ticket/ticket';
import { Live } from './module-6/ex-6-2-cagnotte/live';
import { CarteOhio } from './module-7/ex-7-1-carte-ohio/carte-ohio';
import { CARTE_OHIO_ROUTES } from './module-7/ex-7-1-carte-ohio/carte-ohio.routes';
import { BRAINROTDEX_ROUTES } from './module-7/ex-7-2-brainrotdex/brainrotdex.routes';
import { ProjetFinal } from './module-8/projet-final/projet-final';
import { PROJET_FINAL_ROUTES } from './module-8/projet-final/projet-final.routes';

/** One route per exercise. The `title` is shown in the side menu. */
export const EXERCICES: Route[] = [
  { path: 'ex-1-1', title: '1.1 Ecran-titre', component: EcranTitre },
  { path: 'ex-1-2', title: '1.2 Fiche brainrot', component: FicheBrainrot },
  { path: 'ex-1-3', title: "1.3 Café de l'Ohio", component: CafeOhio },
  { path: 'ex-2-1', title: '2.1 Réserve de bananes', component: ReserveBananes },
  { path: 'ex-2-2', title: "2.2 Jauge d'aura", component: JaugeAura },
  { path: 'ex-2-3', title: '2.3 Nom du brainrot', component: NomDuBrainrot },
  { path: 'ex-3-1', title: '3.1 Boutique de skins', component: BoutiqueSkins },
  { path: 'ex-3-2', title: '3.2 Caption', component: Caption },
  { path: 'ex-3-3', title: '3.3 Le videur', component: Videur },
  { path: 'ex-3-4', title: '3.4 Playlist', component: Playlist },
  { path: 'ex-3-5', title: '3.5 Choix de team', component: ChoixTeam },
  { path: 'ex-4-1', title: '4.1 Collection', component: Collection },
  { path: 'ex-4-2', title: '4.2 Battle', component: Battle },
  { path: 'ex-4-3', title: '4.3 Commande', component: Commande },
  { path: 'ex-5-1', title: '5.1 Inscription squad', component: InscriptionSquad },
  { path: 'ex-6-1', title: '6.1 Ticket de caisse', component: Ticket },
  { path: 'ex-6-2', title: '6.2 Cagnotte du live', component: Live },
  {
    path: 'ex-7-1',
    title: "7.1 Carte de l'Ohio",
    component: CarteOhio,
    children: CARTE_OHIO_ROUTES,
  },
  { path: 'ex-7-2', title: '7.2 Brainrotdex', children: BRAINROTDEX_ROUTES },
  { path: 'ex-8', title: '8 Brainrot Shop', component: ProjetFinal, children: PROJET_FINAL_ROUTES },
];

export const routes: Routes = [{ path: '', redirectTo: 'ex-1-1', pathMatch: 'full' }, ...EXERCICES];
