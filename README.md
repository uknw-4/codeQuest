# CodeQuest

Une appli gratuite pour apprendre à coder, en français et en anglais.

**⬇ Télécharger pour Windows : [CodeQuest.exe](https://github.com/uknw-4/codeQuest/raw/main/telecharger/CodeQuest.exe)** (3 Mo, aucune installation) · [Nouveautés](CHANGELOG.md)

- **18 parcours** : Python, JavaScript, HTML, CSS, SQL, Algorithmique, TypeScript, Java, C, C++, C#, PHP, Go, Rust, Ruby, Swift, Kotlin, Bash (192 exercices)
- **Atelier** : 27 défis où l'on écrit du vrai code (JavaScript, Python, SQL, HTML/CSS), vérifié automatiquement par des tests, plus un bac à sable
- **Révisions espacées** : les questions ratées reviennent au bon moment
- **Progression** : XP, niveaux, séries de jours, 25 succès
- Installable sur PC et utilisable hors ligne (sauf le premier chargement de Python)

Aucun serveur, aucune base de données : ta progression reste dans ton navigateur.

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

---

## Version PC (.exe)

`CodeQuest.exe` est une vraie appli Windows (fenêtre à part, icône, pas besoin de navigateur ni d'installation). Elle est construite avec [Neutralinojs](https://neutralino.js.org) : le fichier de réglages est dans `desktop/neutralino.config.json`.

Pour la reconstruire : copie `index.html`, `sw.js`, `manifest.webmanifest`, `content/` et `icons/` dans un dossier `resources/` à côté de ce fichier, puis lance `npx @neutralinojs/neu update` et `npx @neutralinojs/neu build --release --embed-resources`.

Windows 10/11 requis (WebView2, déjà présent sur la plupart des PC).
