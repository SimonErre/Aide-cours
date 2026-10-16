import { Service } from '@angular/core';

const SEUIL_REMISE = 5;
const TAUX_REMISE = 0.1;

/** Computes prices, with a discount for bulk purchases. */
@Service()
export class Caisse {
  prixTotal(prixUnitaire: number, quantite: number): number {
    const total = prixUnitaire * quantite;

    if (quantite < SEUIL_REMISE) {
      return total;
    }

    return Math.round(total * (1 - TAUX_REMISE));
  }

  aRemise(quantite: number): boolean {
    return quantite >= SEUIL_REMISE;
  }
}
