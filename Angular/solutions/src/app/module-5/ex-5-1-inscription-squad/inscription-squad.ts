import { Component, signal } from '@angular/core';
import { email, form, FormField, max, min, minLength, required } from '@angular/forms/signals';

const PSEUDO_MIN = 3;
const NIVEAU_MIN = 1;
const NIVEAU_MAX = 99;

interface Membre {
  pseudo: string;
  email: string;
  niveau: number;
  team: string;
}

@Component({
  imports: [FormField],
  selector: 'app-inscription-squad',
  styleUrl: './inscription-squad.css',
  templateUrl: './inscription-squad.html',
})
export class InscriptionSquad {
  protected readonly teams = ['Tralalero', 'Bombardiro', 'Tung Tung'];

  protected readonly membre = signal<Membre>({ pseudo: '', email: '', niveau: 1, team: '' });

  protected readonly formulaire = form(this.membre, (chemin) => {
    required(chemin.pseudo, { message: 'Le pseudo est obligatoire' });
    minLength(chemin.pseudo, PSEUDO_MIN, {
      message: `Le pseudo doit faire au moins ${PSEUDO_MIN} caractères`,
    });

    required(chemin.email, { message: "L'email est obligatoire" });
    email(chemin.email, { message: 'Email invalide' });

    min(chemin.niveau, NIVEAU_MIN, { message: `Niveau minimum : ${NIVEAU_MIN}` });
    max(chemin.niveau, NIVEAU_MAX, { message: `Niveau maximum : ${NIVEAU_MAX}` });

    required(chemin.team, { message: 'Choisis une team' });
  });

  protected readonly bienvenue = signal('');

  protected soumettre(event: Event) {
    event.preventDefault();

    if (this.formulaire().invalid()) {
      return;
    }

    const { pseudo, team } = this.membre();
    this.bienvenue.set(`Bienvenue dans la squad, ${pseudo} de la team ${team} !`);
  }
}
