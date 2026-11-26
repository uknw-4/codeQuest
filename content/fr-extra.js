// Leçons supplémentaires (FR)
CQ.fr.py.ls.push(
 {n:'Fonctions',th:'def crée une fonction réutilisable. Les paramètres sont entre parenthèses, return renvoie le résultat.',ex:'def saluer(nom):\n    return "Salut " + nom\n\nprint(saluer("Léa"))',q:[
  {t:'f',p:'Complète pour créer une fonction :',c:'___ double(x):\n    return x * 2',a:['def'],e:'def (pour « define ») crée une fonction.'},
  {p:'Qu\'affiche ce code ?',c:'def f(x):\n    return x + 1\n\nprint(f(2))',o:['2','3','x + 1','f(2)'],a:1,e:'f(2) renvoie 2 + 1 = 3.'},
  {p:'Dans def saluer(nom):, nom est…',o:['Un paramètre','Une boucle','Un module','Un commentaire'],a:0,e:'nom reçoit la valeur passée à l\'appel.'}]},
 {n:'Listes et dictionnaires',th:'Une liste range des valeurs dans l\'ordre. Un dictionnaire associe des clés à des valeurs.',ex:'notes = [12, 15, 9]\nnotes.append(18)\nprint(len(notes))  # 4\n\nprofil = {"nom": "Léa", "age": 25}\nprint(profil["nom"])  # Léa',q:[
  {p:'Que vaut len([1, 2, 3]) ?',o:['2','3','6','[1, 2, 3]'],a:1,e:'len() compte les éléments : 3.'},
  {t:'f',p:'Ajoute 4 à la fin de la liste :',c:'liste.___(4)',a:['append'],e:'append() ajoute un élément à la fin.'},
  {p:'Qu\'affiche ce code ?',c:'d = {"nom": "Léa"}\nprint(d["nom"])',o:['nom','Léa','{"nom": "Léa"}','Erreur'],a:1,e:'d["nom"] lit la valeur associée à la clé "nom".'}]}
);
CQ.fr.js.ls.push(
 {n:'Objets',th:'Un objet regroupe des propriétés nom : valeur. On les lit avec un point.',ex:'const user = { nom: "Léa", age: 25 };\nconsole.log(user.nom);        // Léa\nconsole.log(Object.keys(user)); // ["nom", "age"]',q:[
  {p:'Qu\'affiche ce code ?',c:'const user = { nom: "Léa", age: 25 };\nconsole.log(user.age);',o:['nom','25','"age"','undefined'],a:1,e:'user.age lit la propriété age.'},
  {t:'f',p:'Liste les clés de l\'objet :',c:'Object.___(user)',a:['keys'],e:'Object.keys() renvoie la liste des clés.'},
  {p:'Que donne user.ville si la propriété n\'existe pas ?',o:['null','undefined','Erreur','""'],a:1,e:'Une propriété absente vaut undefined.'}]}
);
CQ.fr.algo={d:'La pensée du programmeur : logique, efficacité, recherche, récursivité, et les maths utiles (sans prise de tête).',ls:[
 {n:'Logique booléenne',th:'Une condition vaut vrai ou faux. and : les deux doivent être vrais. or : au moins un. not : inverse.',ex:'age = 20\na_un_billet = True\nprint(age >= 18 and a_un_billet)  # True\nprint(not True)                    # False',q:[
  {p:'Que vaut True and False ?',o:['True','False','Erreur','None'],a:1,e:'and exige que les deux soient vrais.'},
  {p:'Que vaut True or False ?',o:['True','False','Erreur','None'],a:0,e:'or : un seul vrai suffit.'},
  {t:'f',p:'Inverse la condition :',c:'___ True   # donne False',a:['not'],e:'not inverse une valeur booléenne.'}]},
 {n:'Le modulo',th:'% donne le reste d\'une division. C\'est l\'outil n°1 pour savoir si un nombre est pair, ou pour faire des cycles.',ex:'print(7 % 3)   # 1  (7 = 3×2 + 1)\nprint(10 % 2)  # 0  → 10 est pair',q:[
  {p:'Que vaut 7 % 3 ?',o:['2','1','0','2.33'],a:1,e:'7 = 3 × 2 + 1, le reste est 1.'},
  {p:'Comment tester si n est pair ?',o:['n / 2 == 0','n % 2 == 0','n % 2 == 1','n * 2 == 0'],a:1,e:'Un nombre pair a un reste de 0 quand on le divise par 2.'},
  {t:'f',p:'Quel opérateur donne le reste ?',c:'reste = 17 ___ 5',a:['%'],e:'% est l\'opérateur modulo (17 % 5 = 2).'}]},
 {n:'Efficacité (Big O)',th:'Big O mesure comment le temps augmente avec la taille des données. O(1) : constant. O(n) : proportionnel. O(n²) : explose vite.',ex:'liste[0]            # O(1)  accès direct\nfor x in liste:     # O(n)  un passage\n    for y in liste: # O(n²) boucle dans une boucle\n        ...',q:[
  {p:'Parcourir une liste une fois, c\'est…',o:['O(1)','O(n)','O(n²)','O(log n)'],a:1,e:'Le temps grandit avec le nombre d\'éléments n.'},
  {p:'Une boucle dans une boucle sur la même liste, c\'est…',o:['O(n)','O(1)','O(n²)','O(2)'],a:2,e:'n passages × n passages = n².'},
  {p:'Lire liste[5] est…',o:['O(1)','O(n)','O(n²)','Impossible'],a:0,e:'L\'accès par indice est immédiat, quelle que soit la taille.'}]},
 {n:'Recherche binaire',th:'Dans une liste triée, on regarde le milieu et on jette la moitié inutile à chaque étape. Très rapide : O(log n).',ex:'# Chercher 42 dans 1 000 nombres triés :\n# 1000 → 500 → 250 → 125 → … ≈ 10 étapes',q:[
  {t:'f',p:'La recherche binaire exige une liste…',c:'une liste ___ (un mot)',a:['triée','triee','ordonnée','ordonnee'],e:'Sans ordre, impossible de savoir quelle moitié jeter.'},
  {p:'Environ combien d\'étapes pour 1 000 éléments ?',o:['1 000','500','10','1'],a:2,e:'On divise par 2 à chaque fois : 2¹⁰ ≈ 1 000.'},
  {p:'À chaque étape on regarde…',o:['Le premier élément','Le dernier','L\'élément du milieu','Un élément au hasard'],a:2,e:'Le milieu dit dans quelle moitié continuer.'}]},
 {n:'Récursivité',th:'Une fonction récursive s\'appelle elle-même sur un problème plus petit. Elle a besoin d\'un cas de base pour s\'arrêter.',ex:'def fact(n):\n    if n == 1:          # cas de base\n        return 1\n    return n * fact(n - 1)\n\nprint(fact(3))  # 3 × 2 × 1 = 6',q:[
  {p:'Que vaut fact(3) ?',o:['3','6','9','1'],a:1,e:'3 × 2 × 1 = 6.'},
  {p:'Qu\'est-ce qui empêche une récursion infinie ?',o:['Le cas de base','Le print','Une variable globale','Rien'],a:0,e:'Le cas de base arrête les appels.'},
  {p:'Une fonction récursive…',o:['S\'appelle elle-même','Ne renvoie rien','Utilise forcément une boucle for','Est toujours lente'],a:0,e:'C\'est la définition de la récursivité.'}]}
]};
