# CodeQuest

Une appli gratuite pour apprendre à coder, en français et en anglais.

- **18 parcours** : Python, JavaScript, HTML, CSS, SQL, Algorithmique, TypeScript, Java, C, C++, C#, PHP, Go, Rust, Ruby, Swift, Kotlin, Bash (192 exercices)
- **Atelier** : 27 défis où l'on écrit du vrai code (JavaScript, Python, SQL, HTML/CSS), vérifié automatiquement par des tests, plus un bac à sable
- **Révisions espacées** : les questions ratées reviennent au bon moment
- **Progression** : XP, niveaux, séries de jours, 25 succès
- Installable sur PC et utilisable hors ligne (sauf le premier chargement de Python)

Aucun serveur, aucune base de données : ta progression reste dans ton navigateur.

---

## Mettre l'appli en ligne avec GitHub Pages (gratuit)

1. Crée un compte sur [github.com](https://github.com) si tu n'en as pas.
2. Clique sur **+** en haut à droite, puis **New repository**.
   - Nom : `codequest`
   - Visibilité : **Public** (obligatoire pour GitHub Pages gratuit)
   - Clique sur **Create repository**.
3. Sur la page du dépôt, clique sur **uploading an existing file**.
4. Glisse **tout le contenu** du dossier (`index.html`, `sw.js`, `manifest.webmanifest`, `README.md`, `.nojekyll`, et les dossiers `content` et `icons`), puis **Commit changes**.
   - Astuce : le fichier `.nojekyll` est caché sur certains systèmes. S'il n'est pas envoyé, ce n'est pas grave.
5. Va dans **Settings → Pages**.
   - Source : **Deploy from a branch**
   - Branch : **main**, dossier **/ (root)**, puis **Save**.
6. Attends 1 à 2 minutes. Ton appli est en ligne à l'adresse :
   `https://TON-PSEUDO.github.io/codequest/`

Pour l'installer sur ton PC : ouvre l'adresse dans **Chrome ou Edge**, puis clique sur **Installer sur mon PC** dans le menu de gauche (ou sur l'icône d'installation dans la barre d'adresse).

---

## Tester sur ton PC sans GitHub

L'installation et le mode hors ligne ont besoin d'une vraie adresse web. Pour tester en local :

```bash
python -m http.server 8000
```

puis ouvre `http://localhost:8000`.

## Structure

```
index.html            l'appli (interface, logique, exécution du code)
content/fr.js         leçons en français
content/fr-extra.js   leçons supplémentaires + Algorithmique (FR)
content/en.js         toutes les leçons en anglais
content/challenges.js défis de l'Atelier (FR/EN) avec leurs tests
sw.js                 mode hors ligne
manifest.webmanifest  installation comme application
```

Pour ajouter une leçon, copie un bloc `{n:..., th:..., ex:..., q:[...]}` dans `content/fr.js` **et** `content/en.js`, au même endroit et avec les réponses dans le même ordre.

## Technologies

JavaScript sans framework · [Pyodide](https://pyodide.org) (Python dans le navigateur) · [AlaSQL](https://github.com/AlaSQL/alasql)
