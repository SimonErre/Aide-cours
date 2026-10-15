// =============================================================
// Module 7 : Les Chroniques de l'Arene - CODE COMPLET DE BASE
// Ce fichier contient le jeu fonctionnel. Modifie-le pour
// relever les Defis 7.1, 7.2 et 7.3 !
// =============================================================

using System;

class Combattant
{
    private string nom;
    private int pv;
    private int pvMax;
    private int force;
    private int potions;

    // === [DEFI 7.3 ICI] ===
    // TODO Defi 7.3 : Ajoute un attribut int "mana" ici (le heros commence avec 30 mana)

    // Constructeur
    public Combattant(string nomChoisi, int pvDepart, int forceDepart, int nbPotions)
    {
        nom = nomChoisi;
        pv = pvDepart;
        pvMax = pvDepart;
        force = forceDepart;
        potions = nbPotions;
    }

    public string GetNom() { return nom; }
    public bool EstVivant() { return pv > 0; }

    public void AfficherBarreDeVie()
    {
        Console.WriteLine($"[{nom}] PV : {pv}/{pvMax} | Force : {force} | Potions : {potions}");
    }

    public void RecevoirDegats(int degats)
    {
        pv -= degats;
        if (pv < 0)
        {
            pv = 0;
        }
        Console.WriteLine($"  -> {nom} subit {degats} degats ! (PV restants : {pv})");
    }

    public void Attaquer(Combattant cible)
    {
        Console.WriteLine($"\n⚔️ {nom} attaque {cible.GetNom()} !");
        cible.RecevoirDegats(force);
    }

    public void BoirePotion()
    {
        if (potions > 0)
        {
            potions--;
            int soin = 35;
            pv += soin;
            if (pv > pvMax)
            {
                pv = pvMax;
            }
            Console.WriteLine($"\n🧪 {nom} boit une potion et recupere {soin} PV ! (PV : {pv}/{pvMax}, Potions restantes : {potions})");
        }
        else
        {
            Console.WriteLine("\n❌ Plus de potions dans le sac ! Tu perds ton tour en cherchant...");
        }
    }

    // === [DEFI 7.1 ICI] ===
    // TODO Defi 7.1 : Cree une methode public void SeDefendre(Combattant cible)
    //   -> Le heros inflige 5 degats fixes a la cible
    //   -> Le heros se soigne de 10 PV (sans depasser pvMax)
    //   -> Affiche un message avec l'emoji bouclier

    // === [DEFI 7.2 ICI] ===
    // TODO Defi 7.2 : Cree une methode public void GagnerRecompense()
    //   -> Ajoute 1 potion au heros (potions++)
    //   -> Augmente la force de 5 (force += 5)
    //   -> Affiche le message de butin avec l'emoji cadeau

    // === [DEFI 7.3 ICI] ===
    // TODO Defi 7.3 : Cree une methode public void AttaqueLourde(Combattant cible)
    //   -> Si le heros a au moins 15 mana :
    //      - Consomme 15 mana
    //      - Inflige force * 2 degats a la cible
    //      - Affiche un message avec l'emoji eclair
    //   -> Sinon, affiche "Pas assez de mana !"
}

class Program
{
    static void Main()
    {
        // Active l'affichage UTF-8 pour que les emojis s'affichent correctement sur Windows
        Console.OutputEncoding = System.Text.Encoding.UTF8;

        Console.WriteLine("=========================================");
        Console.WriteLine("   BIENVENUE DANS LES CHRONIQUES DE L'ARENE");
        Console.WriteLine("=========================================\n");

        Console.Write("Entrez le nom de votre Heros : ");
        string nomJoueur = Console.ReadLine();

        // Creation du heros
        Combattant heros = new Combattant(nomJoueur, 100, 25, 3);

        // Creation du tableau d'ennemis
        Combattant[] listeEnnemis = {
            new Combattant("Gobelin Eclaireur", 45, 12, 0),
            new Combattant("Chevalier Squelette", 70, 18, 0),
            new Combattant("Dragon Noir (BOSS)", 110, 24, 0)
        };

        // Boucle FOR pour parcourir les 3 combats
        for (int i = 0; i < listeEnnemis.Length; i++)
        {
            Combattant ennemiActuel = listeEnnemis[i];

            Console.WriteLine("\n-----------------------------------------");
            Console.WriteLine($"🔥 COMBAT {i + 1}/3 : Un {ennemiActuel.GetNom()} sauvage apparait !");
            Console.WriteLine("-----------------------------------------");

            // Boucle WHILE du combat
            while (heros.EstVivant() && ennemiActuel.EstVivant())
            {
                Console.WriteLine("\n--- Etat du combat ---");
                heros.AfficherBarreDeVie();
                ennemiActuel.AfficherBarreDeVie();

                int choixAction = 0;
                // Boucle DO...WHILE de saisie securisee
                // === [DEFI 7.1 ICI] === : N'oublie pas de mettre a jour la condition pour accepter 3 !
                // === [DEFI 7.3 ICI] === : N'oublie pas de mettre a jour la condition pour accepter 4 !
                do
                {
                    Console.Write("\nQue veux-tu faire ? (1: Attaquer | 2: Boire une potion) : ");
                    // === [DEFI 7.1 ICI] === : Modifie le texte du menu pour ajouter " | 3: Se defendre"
                    // === [DEFI 7.3 ICI] === : Modifie le texte du menu pour ajouter " | 4: Attaque Lourde"
                    choixAction = int.Parse(Console.ReadLine());
                } while (choixAction != 1 && choixAction != 2);

                // SWITCH pour executer l'action
                switch (choixAction)
                {
                    case 1:
                        heros.Attaquer(ennemiActuel);
                        break;
                    case 2:
                        heros.BoirePotion();
                        break;
                    // === [DEFI 7.1 ICI] ===
                    // TODO Defi 7.1 : Ajoute un case 3 pour appeler heros.SeDefendre(ennemiActuel)

                    // === [DEFI 7.3 ICI] ===
                    // TODO Defi 7.3 : Ajoute un case 4 pour appeler heros.AttaqueLourde(ennemiActuel)
                }

                // Riposte de l'ennemi
                if (ennemiActuel.EstVivant())
                {
                    ennemiActuel.Attaquer(heros);
                }
                else
                {
                    Console.WriteLine($"\n🏆 Victoire ! {ennemiActuel.GetNom()} a ete terrasse !");

                    // === [DEFI 7.2 ICI] ===
                    // TODO Defi 7.2 : Appelle heros.GagnerRecompense() ici pour donner le butin
                }
            }

            if (!heros.EstVivant())
            {
                Console.WriteLine($"\n💀 Tu es tombe au combat face a {ennemiActuel.GetNom()}...");
                break;
            }
        }

        // Bilan final
        Console.WriteLine("\n=========================================");
        if (heros.EstVivant())
        {
            Console.WriteLine($"🎉 FELICITATIONS {heros.GetNom()} ! Tu es le grand Champion de l'Arene !");
        }
        else
        {
            Console.WriteLine("   GAME OVER - Retente ta chance !");
        }
        Console.WriteLine("=========================================");
    }
}
