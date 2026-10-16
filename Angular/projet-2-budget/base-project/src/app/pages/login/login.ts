import { Component } from '@angular/core';

// =============================================================
// Etape 2 : La page de connexion
// Objectif : formulaire avec signals, validation, appel au service.
// =============================================================

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  // TODO : signal identifiants { email, motDePasse } et formulaire avec form()
  // TODO : email obligatoire et valide, mot de passe obligatoire (6 caractères min.)
  // TODO : signal echec (identifiants incorrects)
  // TODO : méthode connecter(event) : login puis navigation vers /tableau-de-bord
}
