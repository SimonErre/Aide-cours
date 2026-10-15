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

using System;

// TODO: Cree une classe parente Monstre avec :
//   - Attributs protected : string nom, int pv
//   - Un constructeur public
//   - Une methode publique void Crier() qui affiche "{nom} : Grrr !"

// TODO: Cree une classe Slime : Monstre
//   - Constructeur avec : base(nom, pv)
//   - Methode public void SeDiviser()

// TODO: Cree une classe Dragon : Monstre
//   - Attribut prive int porteeFlammes
//   - Constructeur avec : base(nom, pv) + porteeFlammes
//   - Methode public void CracherDuFeu()

class Program
{
    static void Main()
    {
        // TODO: Cree un Slime blob = new Slime("Slime", 20)
        //       Affiche "--- Apparition d'un Slime (20 PV) ---"
        //       Appelle blob.Crier() puis blob.SeDiviser()

        // TODO: Affiche une ligne vide

        // TODO: Cree un Dragon smaug = new Dragon("Dragon Rouge", 500, 30)
        //       Affiche "--- Apparition d'un Dragon Rouge (500 PV) ---"
        //       Appelle smaug.Crier() puis smaug.CracherDuFeu()
    }
}
