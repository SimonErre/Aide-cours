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

using System;

// TODO: Cree une classe Personnage avec :
//   - Attributs prives : string nom, int pv, int pvMax
//   - Un constructeur pour initialiser nom, pv et pvMax
//   - Une methode public void AfficherStatut() -> "[nom] PV : pv/pvMax"
//   - Une methode public void Soigner(Personnage cible, int pointsDeSoin)
//     qui ajoute les PV a la cible SANS depasser pvMax,
//     et affiche le message de soin

class Program
{
    static void Main()
    {
        // TODO: Cree un Personnage paladin = new Personnage("Paladin", 100, 100)
        // TODO: Cree un Personnage guerrier = new Personnage("Guerrier blesse", 40, 100)

        // TODO: Affiche les statuts des deux personnages

        // TODO: Le paladin soigne le guerrier de 35 PV -> affiche le statut du guerrier

        // TODO: Le paladin soigne a nouveau -> affiche le statut (PV max 100 !)
    }
}
