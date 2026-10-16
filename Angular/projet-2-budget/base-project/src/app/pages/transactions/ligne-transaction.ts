import { Component } from '@angular/core';

/** One row of the transaction list. Deleting is the parent's job. */
@Component({
  imports: [],
  selector: 'app-ligne-transaction',
  template: `
    <!-- TODO : date (pipe date), libellé, catégorie, montant signé (pipe currency), bouton 🗑️ -->
  `,
  styles: `
    :host {
      display: grid;
      grid-template-columns: 6rem 1fr 6rem 8rem 2.5rem;
      gap: 1rem;
      align-items: center;
      padding: 0.5rem 0;
      border-bottom: 1px solid var(--gris);
    }

    .categorie {
      font-size: 0.85rem;
      color: #666;
    }

    strong {
      text-align: right;
    }
  `,
})
export class LigneTransaction {
  // TODO : input obligatoire transaction, output supprimer (id)
}
