// =============================================================
// Module 7 : Les Chroniques de l'Arene - CODE COMPLET DE BASE
// Ce fichier contient le jeu fonctionnel. Modifie-le pour
// relever les Defis 7.1, 7.2 et 7.3 !
// =============================================================

#include <iostream>
#include <string>

// Bloc conditionnel pour l'affichage des emojis sur Windows.
// Sur Mac/Linux, ce bloc est ignore automatiquement.
#ifdef _WIN32
#include <windows.h>
#endif

class Combattant {
private:
    std::string nom;
    int pv;
    int pvMax;
    int force;
    int potions;

    // === [DEFI 7.3 ICI] ===
    // TODO Defi 7.3 : Ajoute un attribut int "mana" ici (le heros commence avec 30 mana)

public:
    // Constructeur
    Combattant(std::string nomChoisi, int pvDepart, int forceDepart, int nbPotions) {
        nom = nomChoisi;
        pv = pvDepart;
        pvMax = pvDepart;
        force = forceDepart;
        potions = nbPotions;
    }

    // Methodes pour lire certaines informations privees (on les appelle des "Getters")
    std::string getNom() { return nom; }
    bool estVivant() { return pv > 0; }

    void afficherBarreDeVie() {
        std::cout << "[" << nom << "] PV : " << pv << "/" << pvMax
                  << " | Force : " << force << " | Potions : " << potions << std::endl;
    }

    void recevoirDegats(int degats) {
        pv -= degats;
        if (pv < 0) {
            pv = 0;
        }
        std::cout << "  -> " << nom << " subit " << degats << " degats ! (PV restants : " << pv << ")" << std::endl;
    }

    void attaquer(Combattant& cible) {
        std::cout << "\n⚔️ " << nom << " attaque " << cible.getNom() << " !" << std::endl;
        cible.recevoirDegats(force);
    }

    void boirePotion() {
        if (potions > 0) {
            potions--;
            int soin = 35;
            pv += soin;
            if (pv > pvMax) {
                pv = pvMax;
            }
            std::cout << "\n🧪 " << nom << " boit une potion et recupere " << soin
                      << " PV ! (PV : " << pv << "/" << pvMax << ", Potions restantes : " << potions << ")" << std::endl;
        } else {
            std::cout << "\n❌ Plus de potions dans le sac ! Tu perds ton tour en cherchant..." << std::endl;
        }
    }

    // === [DEFI 7.1 ICI] ===
    // TODO Defi 7.1 : Cree une methode void seDefendre(Combattant& cible)
    //   -> Le heros inflige 5 degats fixes a la cible
    //   -> Le heros se soigne de 10 PV (sans depasser pvMax)
    //   -> Affiche un message avec l'emoji bouclier

    // === [DEFI 7.2 ICI] ===
    // TODO Defi 7.2 : Cree une methode void gagnerRecompense()
    //   -> Ajoute 1 potion au heros (potions++)
    //   -> Augmente la force de 5 (force += 5)
    //   -> Affiche le message de butin avec l'emoji cadeau

    // === [DEFI 7.3 ICI] ===
    // TODO Defi 7.3 : Cree une methode void attaqueLourde(Combattant& cible)
    //   -> Si le heros a au moins 15 mana :
    //      - Consomme 15 mana
    //      - Inflige force * 2 degats a la cible
    //      - Affiche un message avec l'emoji eclair
    //   -> Sinon, affiche "Pas assez de mana !"
};

int main() {
    // Active l'affichage UTF-8 sur Windows pour les emojis
    #ifdef _WIN32
    SetConsoleOutputCP(CP_UTF8);
    #endif

    std::cout << "=========================================" << std::endl;
    std::cout << "   BIENVENUE DANS LES CHRONIQUES DE L'ARENE" << std::endl;
    std::cout << "=========================================\n" << std::endl;

    std::string nomJoueur;
    std::cout << "Entrez le nom de votre Heros : ";
    std::cin >> nomJoueur;

    // Creation du heros : 100 PV, 25 de Force, 3 Potions
    Combattant heros(nomJoueur, 100, 25, 3);

    // Creation d'un tableau de 3 ennemis de plus en plus forts !
    Combattant listeEnnemis[3] = {
        Combattant("Gobelin Eclaireur", 45, 12, 0),
        Combattant("Chevalier Squelette", 70, 18, 0),
        Combattant("Dragon Noir (BOSS)", 110, 24, 0)
    };

    // Boucle FOR pour affronter les 3 ennemis l'un apres l'autre
    for (int i = 0; i < 3; i++) {
        Combattant& ennemiActuel = listeEnnemis[i];

        std::cout << "\n-----------------------------------------" << std::endl;
        std::cout << "🔥 COMBAT " << (i + 1) << "/3 : Un " << ennemiActuel.getNom() << " sauvage apparait !" << std::endl;
        std::cout << "-----------------------------------------" << std::endl;

        // Boucle WHILE : tant que les deux combattants sont vivants
        while (heros.estVivant() && ennemiActuel.estVivant()) {
            std::cout << "\n--- Etat du combat ---" << std::endl;
            heros.afficherBarreDeVie();
            ennemiActuel.afficherBarreDeVie();

            int choixAction = 0;
            // Boucle DO...WHILE pour s'assurer que le joueur tape 1 ou 2
            // === [DEFI 7.1 ICI] === : N'oublie pas de mettre a jour la condition pour accepter 3 !
            // === [DEFI 7.3 ICI] === : N'oublie pas de mettre a jour la condition pour accepter 4 !
            do {
                std::cout << "\nQue veux-tu faire ? (1: Attaquer | 2: Boire une potion) : ";
                // === [DEFI 7.1 ICI] === : Modifie le texte du menu pour ajouter " | 3: Se defendre"
                // === [DEFI 7.3 ICI] === : Modifie le texte du menu pour ajouter " | 4: Attaque Lourde"
                std::cin >> choixAction;
            } while (choixAction != 1 && choixAction != 2);

            // SWITCH pour executer l'action choisie par le joueur
            switch (choixAction) {
                case 1:
                    heros.attaquer(ennemiActuel);
                    break;
                case 2:
                    heros.boirePotion();
                    break;
                // === [DEFI 7.1 ICI] ===
                // TODO Defi 7.1 : Ajoute un case 3 pour appeler heros.seDefendre(ennemiActuel)

                // === [DEFI 7.3 ICI] ===
                // TODO Defi 7.3 : Ajoute un case 4 pour appeler heros.attaqueLourde(ennemiActuel)
            }

            // Riposte de l'ennemi s'il a survecu a l'attaque du joueur
            if (ennemiActuel.estVivant()) {
                ennemiActuel.attaquer(heros);
            } else {
                std::cout << "\n🏆 Victoire ! " << ennemiActuel.getNom() << " a ete terrasse !" << std::endl;

                // === [DEFI 7.2 ICI] ===
                // TODO Defi 7.2 : Appelle heros.gagnerRecompense() ici pour donner le butin
            }
        }

        // Si le heros est mort pendant ce combat, on arrete la boucle for avec "break"
        if (!heros.estVivant()) {
            std::cout << "\n💀 Tu es tombe au combat face a " << ennemiActuel.getNom() << "..." << std::endl;
            break;
        }
    }

    // Bilan final de la partie
    std::cout << "\n=========================================" << std::endl;
    if (heros.estVivant()) {
        std::cout << "🎉 FELICITATIONS " << heros.getNom() << " ! Tu es le grand Champion de l'Arene !" << std::endl;
    } else {
        std::cout << "   GAME OVER - Retente ta chance !" << std::endl;
    }
    std::cout << "=========================================" << std::endl;

    return 0;
}
