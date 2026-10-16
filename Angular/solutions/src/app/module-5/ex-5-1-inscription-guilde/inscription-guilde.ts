import { Component, signal } from '@angular/core';
import { email, form, FormField, max, min, minLength, required } from '@angular/forms/signals';

const PSEUDO_MIN = 3;
const NIVEAU_MIN = 1;
const NIVEAU_MAX = 99;

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
    minLength(chemin.pseudo, PSEUDO_MIN, {
      message: `Le pseudo doit faire au moins ${PSEUDO_MIN} caractères`,
    });

    required(chemin.email, { message: "L'email est obligatoire" });
    email(chemin.email, { message: 'Email invalide' });

    min(chemin.niveau, NIVEAU_MIN, { message: `Niveau minimum : ${NIVEAU_MIN}` });
    max(chemin.niveau, NIVEAU_MAX, { message: `Niveau maximum : ${NIVEAU_MAX}` });

    required(chemin.classe, { message: 'Choisis une classe' });
  });

  protected readonly bienvenue = signal('');

  protected soumettre(event: Event) {
    event.preventDefault();

    if (this.formulaire().invalid()) {
      return;
    }

    const { pseudo, classe } = this.recrue();
    this.bienvenue.set(`Bienvenue dans la guilde, ${pseudo} le ${classe} !`);
  }
}
