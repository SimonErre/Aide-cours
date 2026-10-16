import { Component, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';

// =============================================================
// Exercice 5.1 : L'inscription à la guilde
// Objectif : formulaire avec signals, validation et soumission.
// =============================================================

interface Recrue {
  pseudo: string;
  email: string;
  niveau: number;
  classe: string;
}

@Component({
  imports: [FormField],
  selector: 'app-inscription-guilde',
  styleUrl: './inscription-guilde.css',
  templateUrl: './inscription-guilde.html',
})
export class InscriptionGuilde {
  protected readonly classes = ['Guerrier', 'Mage', 'Voleur'];

  protected readonly recrue = signal<Recrue>({ pseudo: '', email: '', niveau: 1, classe: '' });

  protected readonly formulaire = form(this.recrue, (chemin) => {
    required(chemin.pseudo, { message: 'Le pseudo est obligatoire' });
    // TODO : pseudo de 3 caractères minimum (minLength)
    // TODO : email obligatoire et valide (required, email)
    // TODO : niveau entre 1 et 99 (min, max)
    // TODO : classe obligatoire
  });

  // TODO : signal pour le message de bienvenue

  protected soumettre(event: Event) {
    event.preventDefault();
    // TODO : si le formulaire est valide, affiche le message de bienvenue
  }
}
