export type TypeTransaction = 'revenu' | 'depense';

export const CATEGORIES = [
  'Salaire',
  'Courses',
  'Logement',
  'Transport',
  'Loisirs',
  'Autre',
] as const;

export type Categorie = (typeof CATEGORIES)[number];

export interface Transaction {
  id: number;
  libelle: string;
  montant: number;
  type: TypeTransaction;
  categorie: Categorie;
  /** ISO date, e.g. "2026-10-16". */
  date: string;
}
