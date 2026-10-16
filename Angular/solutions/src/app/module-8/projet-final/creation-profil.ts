import { Component, inject, signal } from '@angular/core';
import { form, FormField, minLength, required } from '@angular/forms/signals';

import { ProfilService } from './profil-service';

const PSEUDO_MIN = 3;

interface NouveauProfil {
  pseudo: string;
  team: string;
}

@Component({
  imports: [FormField],
  selector: 'app-creation-profil',
  template: `
    @if (profil.estCree()) {
      <p>Profil de {{ profil.nom() }} créé. Direction le shop, chef !</p>
    } @else {
      <h2>Création du profil</h2>
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
          Team :
          <select [formField]="formulaire.team">
            <option value="">-- Choisir --</option>
            @for (team of teams; track team) {
              <option [value]="team">{{ team }}</option>
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
export class CreationProfil {
  protected readonly profil = inject(ProfilService);
  protected readonly teams = ['Tralalero', 'Bombardiro', 'Tung Tung'];

  protected readonly modele = signal<NouveauProfil>({ pseudo: '', team: '' });

  protected readonly formulaire = form(this.modele, (chemin) => {
    required(chemin.pseudo, { message: 'Le pseudo est obligatoire' });
    minLength(chemin.pseudo, PSEUDO_MIN, {
      message: `Le pseudo doit faire au moins ${PSEUDO_MIN} caractères`,
    });
    required(chemin.team, { message: 'Choisis une team' });
  });

  protected creer(event: Event) {
    event.preventDefault();

    if (this.formulaire().invalid()) {
      return;
    }

    const { pseudo, team } = this.modele();
    this.profil.creer(pseudo, team);
  }
}
