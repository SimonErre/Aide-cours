import { Service } from '@angular/core';

/** The profile inventory: buying and selling go through here. */
@Service()
export class InventaireService {
  // TODO : signal du contenu de l'inventaire
  // TODO : computed stockageTotal et valeurTotale
  // TODO : peutAcheter(objet, quantite) : assez de crédits ET stockage total <= 30 Go
  // TODO : acheter(objet, quantite) : débite les crédits du profil (inject(ProfilService))
  // TODO : vendre(...) : rend 50 % du prix au profil
}
