import { Component, inject, signal } from '@angular/core';
import { form, FormField, minLength, required } from '@angular/forms/signals';

import { HerosService } from './heros-service';

const PSEUDO_MIN = 3;

interface NouveauHeros {
  pseudo: string;
  classe: string;
}

@Component({
  imports: [FormField],
  selector: 'app-creation-heros',
  template: `
    @if (heros.estCree()) {
      <p>Ton héros {{ heros.nom() }} est prêt. Direction le marché !</p>
    } @else {
      <h2>Création du héros</h2>
      <form (submit)="creer($event)">
        <label>
          Pseudo :
          <input [formField]="formulaire.pseudo" />
        </label>
        @if (formulaire.pseudo().touched() && formulaire.pseudo().invalid()) {
          @for (erreur of formulaire.pseudo().errors(); track erreur.kind) {
            <p class="erreur">⚠ {{ erreur.message }}</p>
          }
        }

        <label>
          Classe :
          <select [formField]="formulaire.classe">
            <option value="">-- Choisir --</option>
            @for (classe of classes; track classe) {
              <option [value]="classe">{{ classe }}</option>
            }
          </select>
        </label>

        <button type="submit" [disabled]="formulaire().invalid()">Créer</button>
      </form>
    }
  `,
  styles: `
    form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-width: 20rem;
    }

    .erreur {
      margin: 0;
      color: #b00020;
    }
  `,
})
export class CreationHeros {
  protected readonly heros = inject(HerosService);
  protected readonly classes = ['Guerrier', 'Mage', 'Voleur'];

  protected readonly modele = signal<NouveauHeros>({ pseudo: '', classe: '' });

  protected readonly formulaire = form(this.modele, (chemin) => {
    required(chemin.pseudo, { message: 'Le pseudo est obligatoire' });
    minLength(chemin.pseudo, PSEUDO_MIN, {
      message: `Le pseudo doit faire au moins ${PSEUDO_MIN} caractères`,
    });
    required(chemin.classe, { message: 'Choisis une classe' });
  });

  protected creer(event: Event) {
    event.preventDefault();

    if (this.formulaire().invalid()) {
      return;
    }

    const { pseudo, classe } = this.modele();
    this.heros.creer(pseudo, classe);
  }
}
