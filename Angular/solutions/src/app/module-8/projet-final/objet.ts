export type Categorie = 'Armes' | 'Armures' | 'Potions';

export interface Objet {
  id: number;
  nom: string;
  prix: number;
  poids: number;
  categorie: Categorie;
}
