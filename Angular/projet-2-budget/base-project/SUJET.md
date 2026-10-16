# Projet 2 : Mon Budget

Tu as fini le premier cahier ? Maintenant on construit **une vraie petite application**, étape par étape : une app de gestion de budget avec **connexion**, **pages protégées**, **ajout de transactions** et **tableau de bord**. Fini les exercices isolés, cette fois tout se tient.

## Ce que tu vas apprendre

| Notion | Déjà vue ? | Doc officielle |
|---|---|---|
| Composants, signals, `computed`, `@if` / `@for` | Projet 1 | [Essentials](https://angular.dev/essentials) |
| Formulaires avec signals | Projet 1 | [Signal Forms](https://angular.dev/essentials/signal-forms) |
| Services, `inject()` | Projet 1 | [Dependency injection](https://angular.dev/essentials/dependency-injection) |
| Routage, `routerLink`, routes enfants | Projet 1 | [Routing](https://angular.dev/guide/routing) |
| **Guards** (pages protégées) | 🆕 | [Route guards](https://angular.dev/guide/routing/route-guards) |
| **Pipes** (`currency`, `date`) | 🆕 | [Pipes](https://angular.dev/guide/templates/pipes) |
| **`linkedSignal`** | 🆕 | [linkedSignal](https://angular.dev/guide/signals/linked-signal) |
| **Persistance** avec `localStorage` | 🆕 | [MDN localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage) |

**Règle du jeu :** chaque étape a un **résultat attendu** (captures prises sur le corrigé). Le contenu doit correspondre, le style est déjà fourni.

> ⚠️ **Login pour de faux.** Ici, les comptes sont écrits en dur dans le code (`core/comptes-demo.ts`). C'est parfait pour apprendre, mais **jamais** dans une vraie app : un vrai login vérifie le mot de passe sur un serveur. Tout ce qui est dans le front, n'importe qui peut le lire.

---

## Étape 0 : Lancer le projet

```text
Angular/projet-2-budget/
├── base-project/              <- TON projet (// TODO)
│   ├── SUJET.md               <- ce sujet
│   └── captures/              <- les résultats attendus
└── solutions/                 <- le corrigé
```

```bash
cd Angular/projet-2-budget/base-project
npm install
ng serve
```

Ouvre `http://localhost:4200`. Pour l'instant, tu arrives sur un layout vide : c'est normal, tout reste à coder.

### Ce qui est déjà fourni

Prends 10 minutes pour lire ces fichiers avant de commencer :

```text
src/app/
├── models/
│   ├── transaction.ts       <- Transaction, Categorie, CATEGORIES
│   └── utilisateur.ts       <- Utilisateur
├── core/
│   ├── comptes-demo.ts      <- les deux comptes de test
│   ├── stockage.ts          <- lire / écrire dans localStorage (fourni)
│   ├── date.ts              <- date du jour au format "2026-10-16" (fourni)
│   ├── auth-service.ts      <- étape 1
│   ├── auth-guard.ts        <- étape 3
│   └── budget-service.ts    <- étape 5
├── layout/layout.ts         <- étape 4
├── pages/
│   ├── login/               <- étape 2
│   ├── nouvelle-transaction/ <- étape 6
│   ├── transactions/        <- étape 7
│   ├── tableau-de-bord/     <- étape 8
│   └── page-introuvable/    (fourni)
├── app.config.ts            <- routeur + format français (fourni)
└── app.routes.ts            <- les routes (étape 3)
```

L'architecture en couches :

```text
  Pages (login, tableau de bord, ...)     <- affichent, ne stockent rien
        │ inject()
        ▼
  Services métier (AuthService, BudgetService)  <- la logique et les signals
        │ inject()
        ▼
  Stockage                                <- seul à toucher localStorage
```

Une page ne touche **jamais** `localStorage` directement : elle passe par un service, qui passe par `Stockage`. Si demain on remplace `localStorage` par une API, seul `Stockage` change.

*Question : ouvre `stockage.ts`. Pourquoi chaque appel est-il entouré d'un `try / catch` ?*

---

## Étape 1 : Le service d'authentification

Fichier : `core/auth-service.ts`.

1. Un signal **privé** `_utilisateur` (`Utilisateur | null`), initialisé avec ce que contient le stockage sous la clé `'mon-budget.session'` (ou `null`).
2. Expose-le en lecture seule (`utilisateur`) et ajoute un `computed` `estConnecte`.
3. `login(email, motDePasse)` : cherche le compte dans `COMPTES_DEMO`. S'il n'existe pas, renvoie `false`. Sinon, mets à jour le signal, écris `{ email, pseudo }` dans le stockage (**jamais le mot de passe !**) et renvoie `true`.
4. `logout()` : remet le signal à `null` et supprime la clé du stockage.

> 💡 `private readonly stockage = inject(Stockage);` puis `signal<Utilisateur | null>(this.stockage.lire<Utilisateur>(CLE_SESSION))`.

*Pas de résultat visible pour l'instant : tu le testeras à l'étape 2.*

---

## Étape 2 : La page de connexion

Fichiers : `pages/login/login.ts` et `login.html` (le CSS est fourni).

1. Un signal `identifiants` (`{ email, motDePasse }`) et un formulaire `form()` :
   * email : obligatoire, format valide ;
   * mot de passe : obligatoire, 6 caractères minimum.
2. Affiche les erreurs sous chaque champ quand il est touché et invalide.
3. À la soumission : appelle `auth.login(...)`. Si ça échoue, affiche `"Email ou mot de passe incorrect."`. Si ça marche, navigue vers `/tableau-de-bord`.

Va sur `http://localhost:4200/login` pour tester. Comptes de test : voir `core/comptes-demo.ts`.

**Résultat attendu :**

*Page de connexion :*

![Page de connexion](captures/01-login.png)

*Champs invalides :*

![Erreurs de validation](captures/02-login-erreurs.png)

*Identifiants incorrects :*

![Échec de connexion](captures/03-login-echec.png)

> 💡 Même squelette que l'inscription du projet 1 (exercice 5.1) : `imports: [FormField]`, `[formField]="formulaire.email"`, `event.preventDefault()`.

*Question : connecte-toi, puis ouvre les outils de développement, onglet Application > Local Storage. Que vois-tu ? Recharge la page : es-tu toujours connecté ? Pourquoi ?*

---

## Étape 3 : Les guards

Un **guard** est une fonction que le routeur appelle **avant** d'afficher une page. Elle renvoie `true` (on laisse passer) ou une redirection.

Fichier : `core/auth-guard.ts`.

1. `authGuard` : si l'utilisateur est connecté, `true`. Sinon, redirige vers `/login`.
2. `inviteGuard` : l'inverse. Si l'utilisateur est **déjà** connecté et va sur `/login`, redirige vers `/tableau-de-bord`.
3. Dans `app.routes.ts`, ajoute `canActivate: [inviteGuard]` sur la route `login`, et `canActivate: [authGuard]` sur la route du `Layout` (qui contient toutes les pages connectées).

> 💡 Un guard est une simple fonction, mais `inject()` y fonctionne :
> ```ts
> export const authGuard: CanActivateFn = () => {
>   const auth = inject(AuthService);
>   // ...
>   return inject(Router).createUrlTree(['/login']);
> };
> ```

**Résultat attendu :** déconnecté, taper `http://localhost:4200/transactions` te renvoie sur `/login`. Connecté, taper `/login` te renvoie sur `/tableau-de-bord`.

*Question : le guard protège-t-il vraiment les données ? Que pourrait faire un petit malin avec les outils de développement ?*

---

## Étape 4 : Le layout

Fichier : `layout/layout.ts`. C'est le cadre de toutes les pages connectées (le CSS est fourni).

1. Ajoute les liens `Tableau de bord`, `Transactions` et `+ Ajouter` avec `routerLink` et `routerLinkActive="actif"`. Pour `Transactions`, ajoute `[routerLinkActiveOptions]="{ exact: true }"` (sinon, il resterait actif sur `/transactions/nouvelle`).
2. Affiche le pseudo de l'utilisateur connecté.
3. Un bouton `[Déconnexion]` qui appelle `auth.logout()` puis navigue vers `/login`.

**Résultat attendu (après connexion) :**

![Tableau de bord vide avec le layout](captures/04-tableau-vide.png)

*Le contenu sous l'en-tête viendra à l'étape 8.*

---

## Étape 5 : Le service de budget

Fichier : `core/budget-service.ts`. Le cœur de l'app.

1. Les transactions de chaque utilisateur sont stockées sous la clé `'mon-budget.transactions.' + email`.
2. Elles doivent être **rechargées automatiquement** quand l'utilisateur change (connexion, déconnexion, changement de compte). C'est le job de `linkedSignal` : un signal **modifiable**, mais **recalculé** quand les signals qu'il lit changent.

   ```ts
   private readonly _transactions = linkedSignal<Transaction[]>(() => {
     const utilisateur = this.auth.utilisateur();
     return utilisateur ? (this.stockage.lire<Transaction[]>(this.cle()) ?? []) : [];
   });
   ```

3. Expose `transactions` en lecture seule, puis les `computed` : `totalRevenus`, `totalDepenses`, `solde`, `depensesParCategorie` (tableau de `{ categorie, total, pourcentage }` trié du plus gros au plus petit).
4. `ajouter(transaction)` (sans `id` : génère-le) et `supprimer(id)`. Chacune met à jour le signal **et** le stockage.

> 💡 Le type `Omit<Transaction, 'id'>` veut dire « une Transaction sans le champ id ».
> Pour l'id : `Math.max(0, ...this._transactions().map((t) => t.id)) + 1`.

*Question : pourquoi un `computed` ne suffirait-il pas pour `_transactions` ? Et pourquoi un simple `signal` non plus ?*

---

## Étape 6 : Ajouter une transaction

Fichiers : `pages/nouvelle-transaction/nouvelle-transaction.ts` et `.html`.

1. Un signal `brouillon` : `libelle` (`''`), `montant` (`0`), `type` (`'depense'`), `categorie` (`''`), `date` (aujourd'hui, au format `"2026-10-16"`).
2. Validation : libellé obligatoire, montant ≥ 0,01, catégorie et date obligatoires.
3. Le type se choisit avec **deux boutons radio** dans un `<fieldset>`.
4. À la soumission : `budget.ajouter(...)` puis navigation vers `/transactions`.

**Résultat attendu :**

![Formulaire de nouvelle transaction](captures/05-formulaire.png)

> 💡 Date du jour : `dateDuJour()` (fourni dans `core/date.ts`). Va voir pourquoi on n'utilise pas simplement `new Date().toISOString()`. Boutons radio : `<input type="radio" value="depense" [formField]="formulaire.type" />`.

---

## Étape 7 : La liste des transactions

Fichiers : `pages/transactions/ligne-transaction.ts` et `transactions.ts`.

1. `LigneTransaction` reçoit une transaction (`input.required`) et émet `supprimer` avec son id (`output`). Elle affiche : la date (pipe `date: 'dd/MM/yyyy'`), le libellé, la catégorie, le montant signé (`-` ou `+`, pipe `currency: 'EUR'`) et un bouton 🗑️.
2. `Transactions` affiche une `<app-ligne-transaction>` par transaction et appelle `budget.supprimer(...)` quand une ligne émet `supprimer`.
3. Filtres : boutons `Tout` / `Revenus` / `Dépenses` + champ `Rechercher` (sur le libellé). Un `computed` `transactionsFiltrees`, trié par date (la plus récente en haut).
4. `@empty` : `"Aucune transaction."` avec un lien vers le formulaire.

**Résultat attendu :**

*Après avoir ajouté 5 transactions :*

![Liste des transactions](captures/06-transactions.png)

*Filtre Dépenses + recherche "lo" :*

![Liste filtrée](captures/07-transactions-filtre.png)

> 💡 Les pipes s'importent comme des composants : `imports: [CurrencyPipe, DatePipe]`. Le format français (`1 500,00 €`) vient de `LOCALE_ID` dans `app.config.ts`, va voir.

---

## Étape 8 : Le tableau de bord

Fichier : `pages/tableau-de-bord/tableau-de-bord.ts` (le CSS est fourni).

1. `"Bonjour <pseudo>"`.
2. Trois cartes : **Solde** (vert si positif, rouge si négatif), **Revenus**, **Dépenses**, avec le pipe `currency`.
3. Si le solde est négatif : `"Attention : ton solde est négatif."`.
4. **Dépenses par catégorie** : une ligne par catégorie avec une barre dont la largeur vaut le pourcentage (`[style.width.%]="ligne.pourcentage"`).

**Résultat attendu :**

![Tableau de bord](captures/08-tableau-de-bord.png)

---

## Vérification finale

* [ ] Déconnecté, toute page renvoie vers `/login`.
* [ ] Connecté, `/login` renvoie vers le tableau de bord.
* [ ] Après un rechargement, on est toujours connecté et les transactions sont toujours là.
* [ ] Le compte `bob@budget.fr` ne voit pas les transactions de `alice@budget.fr`.
* [ ] Une URL inconnue affiche la page 404 :

![Page 404](captures/09-introuvable.png)

---

## Bonus

* **Modifier une transaction** : une route `transactions/:id` qui réutilise le formulaire, prérempli (`input()` lié au paramètre de route grâce à `withComponentInputBinding()`).
* **Budget mensuel** : l'utilisateur fixe un plafond de dépenses ; une barre passe au rouge quand il est dépassé.
* **Filtre par mois** : un `<input type="month">` qui filtre la liste et le tableau de bord.
* **Lazy loading** : remplace `component: TableauDeBord` par `loadComponent: () => import('./pages/tableau-de-bord/tableau-de-bord').then((m) => m.TableauDeBord)` et observe l'onglet Réseau.
* **Export CSV** : un bouton qui télécharge les transactions au format CSV.

---

🏆 **Bravo !** Tu viens de coder une vraie application Angular de A à Z.
