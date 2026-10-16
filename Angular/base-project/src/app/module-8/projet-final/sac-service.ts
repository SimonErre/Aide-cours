import { Service } from '@angular/core';

/** The hero's bag: buying and selling go through here. */
@Service()
export class SacService {
  // TODO : signal du contenu du sac
  // TODO : computed poidsTotal et valeurTotale
  // TODO : peutAcheter(objet, quantite) : assez d'or ET poids total <= 30 kg
  // TODO : acheter(objet, quantite) : débite l'or du héros (inject(HerosService))
  // TODO : vendre(...) : rend 50 % du prix au héros
}
