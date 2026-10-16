import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from './auth-service';

/** Lets logged-in users through, sends the others to /login. */
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);

  if (auth.estConnecte()) {
    return true;
  }

  return inject(Router).createUrlTree(['/login']);
};

/** Keeps logged-in users away from /login. */
export const inviteGuard: CanActivateFn = () => {
  const auth = inject(AuthService);

  if (!auth.estConnecte()) {
    return true;
  }

  return inject(Router).createUrlTree(['/tableau-de-bord']);
};
