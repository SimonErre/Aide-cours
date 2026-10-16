export type Categorie = 'Skins' | 'Emotes' | 'Boosts';

export interface Objet {
  id: number;
  nom: string;
  prix: number;
  taille: number;
  categorie: Categorie;
}
