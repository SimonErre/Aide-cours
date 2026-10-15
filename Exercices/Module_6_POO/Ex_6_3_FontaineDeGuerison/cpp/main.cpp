// =============================================================
// Exercice 6.3 : La fontaine de guerison (Interaction entre objets)
// Objectif : Creer une methode qui agit sur un autre objet.
//
// Sortie terminale attendue :
// [Paladin] PV : 100/100
// [Guerrier blesse] PV : 40/100
// Paladin lance un sort de soin sur Guerrier blesse (+35 PV) !
// [Guerrier blesse] PV : 75/100
// Paladin lance un sort de soin sur Guerrier blesse (+35 PV) !
// [Guerrier blesse] PV : 100/100
// =============================================================

#include <iostream>
#include <string>

// TODO: Cree une classe Personnage avec :
//   - Attributs prives : string nom, int pv, int pvMax
//   - Un constructeur pour initialiser nom, pv et pvMax
//   - Une methode void afficherStatut() -> "[nom] PV : pv/pvMax"
//   - Une methode void soigner(Personnage& cible, int pointsDeSoin)
//     qui ajoute les PV a la cible SANS depasser pvMax,
//     et affiche "[nom] lance un sort de soin sur [cible.nom] (+[pointsDeSoin] PV) !"

int main() {

    // TODO: Cree un Personnage paladin("Paladin", 100, 100)
    // TODO: Cree un Personnage guerrier("Guerrier blesse", 40, 100)

    // TODO: Affiche les statuts des deux personnages

    // TODO: Le paladin soigne le guerrier de 35 PV
    // TODO: Affiche le statut du guerrier

    // TODO: Le paladin soigne le guerrier de 35 PV a nouveau
    // TODO: Affiche le statut du guerrier (ne doit pas depasser 100 !)

    return 0;
}
