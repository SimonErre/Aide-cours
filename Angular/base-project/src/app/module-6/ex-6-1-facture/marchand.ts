import { Service } from '@angular/core';

/** Computes prices, with a discount for bulk purchases. */
@Service()
export class Marchand {
  prixTotal(prixUnitaire: number, quantite: number): number {
    // TODO : remise de 10 % à partir de 5 objets
    return 0;
  }

  aRemise(quantite: number): boolean {
    // TODO
    return false;
  }
}
