import { Service } from '@angular/core';

// =============================================================
// Etape 5 : Le service de budget
// Objectif : stocker les transactions de l'utilisateur et calculer les totaux.
// =============================================================

/** A category total, for the dashboard breakdown. */
export interface TotalCategorie {
  categorie: string;
  total: number;
  pourcentage: number;
}

/** Transactions of the logged-in user, saved per user in localStorage. */
@Service()
export class BudgetService {
  // TODO : injecte AuthService et Stockage
  // TODO : linkedSignal _transactions rechargé depuis le stockage quand l'utilisateur change
  // TODO : transactions en lecture seule
  // TODO : computed totalRevenus, totalDepenses, solde, depensesParCategorie
  // TODO : ajouter(transaction), supprimer(id) : mettent à jour le signal ET le stockage
}
