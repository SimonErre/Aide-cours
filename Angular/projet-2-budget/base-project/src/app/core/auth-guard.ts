import { CanActivateFn } from '@angular/router';

// =============================================================
// Etape 3 : Les guards
// Objectif : protéger les pages selon que l'utilisateur est connecté ou non.
// =============================================================

/** Lets logged-in users through, sends the others to /login. */
export const authGuard: CanActivateFn = () => {
  // TODO : true si connecté, sinon redirige vers /login (Router.createUrlTree)
  return true;
};

/** Keeps logged-in users away from /login. */
export const inviteGuard: CanActivateFn = () => {
  // TODO : true si NON connecté, sinon redirige vers /tableau-de-bord
  return true;
};
