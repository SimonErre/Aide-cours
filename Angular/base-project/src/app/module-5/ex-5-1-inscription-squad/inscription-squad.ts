import { Component, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';

// =============================================================
// Exercice 5.1 : L'inscription à la squad
// Objectif : formulaire avec signals, validation et soumission.
// =============================================================

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
    // TODO : pseudo de 3 caractères minimum (minLength)
    // TODO : email obligatoire et valide (required, email)
    // TODO : niveau entre 1 et 99 (min, max)
    // TODO : team obligatoire
  });

  // TODO : signal pour le message de bienvenue

  protected soumettre(event: Event) {
    event.preventDefault();
    // TODO : si le formulaire est valide, affiche le message de bienvenue
  }
}
