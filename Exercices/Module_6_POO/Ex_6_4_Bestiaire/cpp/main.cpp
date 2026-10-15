// =============================================================
// Exercice 6.4 : Le Bestiaire (Heritage - Parent et Enfants)
// Objectif : Creer une classe parente et deux classes enfants.
//
// Sortie terminale attendue :
// --- Apparition d'un Slime (20 PV) ---
// Slime : Grrr !
// Slime se divise en deux petits Slimes gluants !
//
// --- Apparition d'un Dragon Rouge (500 PV) ---
// Dragon Rouge : Grrr !
// Dragon Rouge crache des flammes sur 30 metres !
// =============================================================

#include <iostream>
#include <string>

// TODO: Cree une classe parente Monstre avec :
//   - Attributs protected : string nom, int pv
//   - Un constructeur public
//   - Une methode publique void crier() qui affiche "[nom] : Grrr !"

// TODO: Cree une classe Slime qui herite de Monstre (class Slime : public Monstre)
//   - Son constructeur appelle celui de Monstre
//   - Une methode void seDiviser() qui affiche "[nom] se divise en deux petits Slimes gluants !"

// TODO: Cree une classe Dragon qui herite de Monstre
//   - Un attribut prive int porteeFlammes
//   - Son constructeur prend nom, pv et porteeFlammes
//   - Une methode void cracherDuFeu() qui affiche
//     "[nom] crache des flammes sur [porteeFlammes] metres !"

int main() {

    // TODO: Cree un Slime blob("Slime", 20)
    //       Affiche "--- Apparition d'un Slime (20 PV) ---"
    //       Appelle blob.crier() puis blob.seDiviser()

    // TODO: Affiche une ligne vide

    // TODO: Cree un Dragon smaug("Dragon Rouge", 500, 30)
    //       Affiche "--- Apparition d'un Dragon Rouge (500 PV) ---"
    //       Appelle smaug.crier() puis smaug.cracherDuFeu()

    return 0;
}
