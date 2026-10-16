import { Component, inject, signal } from '@angular/core';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth-service';

const MOT_DE_PASSE_MIN = 6;

interface Identifiants {
  email: string;
  motDePasse: string;
}

@Component({
  imports: [FormField],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly identifiants = signal<Identifiants>({ email: '', motDePasse: '' });

  protected readonly formulaire = form(this.identifiants, (chemin) => {
    required(chemin.email, { message: "L'email est obligatoire" });
    email(chemin.email, { message: 'Email invalide' });

    required(chemin.motDePasse, { message: 'Le mot de passe est obligatoire' });
    minLength(chemin.motDePasse, MOT_DE_PASSE_MIN, {
      message: `Au moins ${MOT_DE_PASSE_MIN} caractères`,
    });
  });

  protected readonly echec = signal(false);

  protected connecter(event: Event) {
    event.preventDefault();

    if (this.formulaire().invalid()) {
      return;
    }

    const { email, motDePasse } = this.identifiants();

    if (!this.auth.login(email, motDePasse)) {
      this.echec.set(true);
      return;
    }

    this.router.navigate(['/tableau-de-bord']);
  }
}
