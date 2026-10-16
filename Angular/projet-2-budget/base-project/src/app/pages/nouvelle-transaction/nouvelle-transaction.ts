import { Component } from '@angular/core';

import { CATEGORIES } from '../../models/transaction';

// =============================================================
// Etape 6 : Ajouter une transaction
// Objectif : formulaire complet (texte, nombre, radio, select, date).
// =============================================================
@Component({
  imports: [],
  selector: 'app-nouvelle-transaction',
  templateUrl: './nouvelle-transaction.html',
  styles: `
    form {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      max-width: 24rem;
    }

    form > label {
      display: flex;
      flex-direction: column;
    }

    fieldset {
      display: flex;
      gap: 1.5rem;
    }
  `,
})
export class NouvelleTransaction {
  protected readonly categories = CATEGORIES;

  // TODO : signal brouillon (libelle, montant, type, categorie, date du jour) et formulaire
  // TODO : libellé obligatoire, montant > 0, catégorie et date obligatoires
  // TODO : méthode enregistrer(event) : budget.ajouter(...) puis navigation vers /transactions
}
