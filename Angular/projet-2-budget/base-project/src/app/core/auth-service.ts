import { Service } from '@angular/core';

// =============================================================
// Etape 1 : Le service d'authentification
// Objectif : savoir qui est connecté, et s'en souvenir après un rechargement.
// =============================================================

/** Who is logged in. The session survives a page reload. */
@Service()
export class AuthService {
  // TODO : injecte Stockage
  // TODO : signal privé _utilisateur (Utilisateur | null), initialisé depuis le stockage
  // TODO : exposé en lecture seule : utilisateur, et computed estConnecte

  /** Returns false when the credentials are wrong. */
  login(email: string, motDePasse: string): boolean {
    // TODO : cherche le compte dans COMPTES_DEMO, mets à jour le signal et le stockage
    return false;
  }

  logout() {
    // TODO : vide le signal et le stockage
  }
}
