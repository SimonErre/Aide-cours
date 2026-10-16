import { Component, inject, signal } from '@angular/core';
import { form, FormField, min, required } from '@angular/forms/signals';
import { Router } from '@angular/router';

import { BudgetService } from '../../core/budget-service';
import { dateDuJour } from '../../core/date';
import { Categorie, CATEGORIES, TypeTransaction } from '../../models/transaction';

const MONTANT_MIN = 0.01;

interface Brouillon {
  libelle: string;
  montant: number;
  type: TypeTransaction;
  categorie: Categorie | '';
  date: string;
}

@Component({
  imports: [FormField],
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
  private readonly budget = inject(BudgetService);
  private readonly router = inject(Router);

  protected readonly categories = CATEGORIES;

  protected readonly brouillon = signal<Brouillon>({
    libelle: '',
    montant: 0,
    type: 'depense',
    categorie: '',
    date: dateDuJour(),
  });

  protected readonly formulaire = form(this.brouillon, (chemin) => {
    required(chemin.libelle, { message: 'Le libellé est obligatoire' });
    min(chemin.montant, MONTANT_MIN, { message: 'Le montant doit être positif' });
    required(chemin.categorie, { message: 'Choisis une catégorie' });
    required(chemin.date, { message: 'La date est obligatoire' });
  });

  protected enregistrer(event: Event) {
    event.preventDefault();

    const brouillon = this.brouillon();

    if (this.formulaire().invalid() || brouillon.categorie === '') {
      return;
    }

    this.budget.ajouter({ ...brouillon, categorie: brouillon.categorie });
    this.router.navigate(['/transactions']);
  }
}
