# ⚔️ Aventure Code : Apprendre le C++ et le C# de Zéro

Bienvenue dans ton espace d'apprentissage de la programmation ! Ce projet a été conçu sur mesure pour t'apprendre à coder en partant de zéro absolu, jusqu'à la création de ton propre jeu de combat en arène orienté objet.

---

## 📚 Comment utiliser ce dépôt ?

Tout se passe en **3 étapes** pour chaque module :

1. **Lis le cours :** Ouvre le fichier [`guide_cpp_csharp_debutant.md`](./guide_cpp_csharp_debutant.md) et lis le module en cours. Prends le temps de bien observer les différences et ressemblances entre le C++ et le C#.
2. **Lis l'énoncé de l'exercice :** Ouvre [`exercices_cpp_csharp_debutant.md`](./exercices_cpp_csharp_debutant.md) et regarde la **Sortie terminale attendue** de l'exercice correspondant.
3. **Code et teste !** Rends-toi dans le dossier de l'exercice correspondant (dans `/Exercices/Module_X/...`), complète les fichiers `main.cpp` (pour le C++) et `Program.cs` (pour le C#) à l'endroit indiqué par `// TODO`, puis lance ton code dans le terminal !

---

## 🛠️ Prérequis techniques (Vérification rapide)

Pour que ton ordinateur comprenne le C++ et le C#, assure-toi d'avoir :
* **Pour le C++ :** Un compilateur comme `g++` (via MinGW/MSYS2 sur Windows, Xcode Command Line Tools sur Mac, ou `build-essential` sur Linux).
* **Pour le C# :** Le **SDK .NET** installé (téléchargeable gratuitement sur le site de Microsoft).

Pour vérifier que tout est prêt, ouvre un terminal et tape :
```bash
g++ --version
dotnet --version
```
*(Si les deux commandes affichent un numéro de version, tu es prêt au combat !)*

---

## 🚀 Comment compiler et lancer ton code ?

Ouvre le terminal intégré de ton éditeur de code, et déplace-toi dans le dossier de l'exercice sur lequel tu travailles avec la commande `cd` (ou fais un *Clic droit sur le dossier de l'exercice > Ouvrir dans le terminal intégré*).

### 🏎️ Lancer ton code C++ (`main.cpp`)
En C++, on commence par traduire ton fichier texte en programme exécutable avec `g++`, puis on le lance :

**Sur Windows (PowerShell / CMD) :**
```powershell
g++ main.cpp -o programme.exe
.\programme.exe
```

**Sur Mac / Linux (ou Git Bash) :**
```bash
g++ main.cpp -o programme
./programme
```

### ⚡ Lancer ton code C# (`Program.cs`)
En C#, l'outil `dotnet` s'occupe de compiler et de lancer le programme en une seule commande magique (tant que tu te trouves dans le dossier contenant le fichier `.csproj`) :

```bash
dotnet run
```

Bon courage, et amuse-toi bien ! 🎮

---

## 🅰️ Bonus : Angular

Un parcours séparé pour découvrir le framework web Angular t'attend dans le dossier [`Angular/projet-1-brainrot/`](./Angular/projet-1-brainrot/base-project/SUJET.md) : cahier d'exercices, projet de départ (`base-project`) et corrigés (`solutions`).

Une fois ce cahier terminé, enchaîne avec le [projet 2 : Mon Budget](./Angular/projet-2-budget/base-project/SUJET.md), une petite application de gestion de budget avec connexion.
