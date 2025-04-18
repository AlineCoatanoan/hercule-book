# Parcours Javascript

Il est de retour ! Le grand Hercule part à la conquête des réseaux sociaux.

Tu trouveras dans ce projet une intégration HTML/CSS aux petits oignons.

Par contre côté Javascript, il manque certaines opérations, ça manque d'interactions. C'est là que tu entres en jeu.

Commence par prendre connaissance du projet. Tu trouveras :

- un fichier `index.html` quasiment opérationnel,
- des fichiers CSS, tu peux regarder mais en principe tout est ok il n'y a pas besoin de les modifier,
- un fichier `base.js` qui contient déjà des choses prêtes à l'emploi, tu vas l'utiliser donc tu devras sans doute y jeter un œil pour te l'approprier, mais **tu n'as pas à le modifier**,
- un fichier `exo.js` vide, c'est principalement **dans ce fichier que tu vas travailler**.

---

## Étape 1 - Exécuter quelque chose

Ça commence mal, j'ai voulu commencer avec un `console.log` dans `exo.js` mais j'ai une erreur en console. Tu sais voir ce qui ne va pas et rectifier le tir ?

---

## Étape 2 - Objet

> À partir de là tout ce que tu écris se passe dans `exo.js`.

Dans notre programme on a besoin de représenter l'entité _Hercule_.

Il est caractérisé par les informations suivantes (je t'ai mis les noms à donner à tes propriétés) :

- `name` : Hercule
- `job` : Demi-dieu
- `age` : 35
- `department` : 75
- `arm` : 60.5 (cm)
- `inRelationship` : true

Définis un objet pour représenter tout ça. Choisis les types de valeurs judicieusement.

**Place au test :**

J'ai prévu une méthode `fillProfil` dans l'objet `base` (dans `base.js`), elle sert à remplir les informations du profil dans la page et attend un objet en argument. Exécute `base.fillProfil()` en lui passant ton objet. Si tout se passe bien, tu devrais voir le profil complété.

---

## Étape 3 - Tableau

Cette fois-ci on veut représenter les amis d’Hercule.

Crée un tableau avec les noms des 4 amis : _Jupiter, Junon, Alcmène, Déjanire_.

**Place aux tests :**

- Exécute la méthode `base.printFriends()` avec ton tableau pour faire apparaître la liste.
- Puis trouve dans `base` la méthode pour afficher **le meilleur ami**. Tu dois lui passer le premier élément de ton tableau. Si tout va bien, tu vois son nom s’afficher à côté du cœur.

---

## Étape 4 - DOM

Il manque un titre dans la page, crée-le uniquement en JS !

- Crée une balise `h1`,
- Donne-lui la classe `banner__title`,
- Écris dedans : `Vous consultez le profil de Hercule`,
- Insère-la dans l’élément avec l’id `header-banner`.

---

## Étape 5 - Boucle

On doit afficher tous ses travaux !

- La méthode `displayWork` de `base` permet d’afficher **un seul** des travaux à la fois.
- Elle prend un paramètre.
- L’idée : faire une boucle de 0 à 11 et appeler `displayWork` à chaque tour.

---

## Étape 6 - Condition

Afficher la **disponibilité** d’Hercule suivant l’heure !

- Entre 8h et 20h : _Disponible_
- Sinon : _Non disponible_

Utilise `base.getHour()` pour connaître l’heure. Affiche le résultat dans l’élément avec l’id `availability`. Ajoute aussi la classe `off` quand il n’est **pas** dispo (la pastille devient rouge).

---

## Étape 7 - Fonction

Crée une fonction qui génère un **pseudo**.

Elle prend en paramètres :

- un prénom,
- un numéro de département,

et retourne un pseudo au format : `Prénom-du-Numéro`.

**Test :**

- Utilise-la avec `Hercule` et `75`,
- Affiche le résultat dans l’élément avec l’id `profil-name`.

---

## Étape 8 - Event

Fais fonctionner le menu en haut à gauche !

- Écoute l’événement `click` sur l’élément avec l’id `menu-toggler`,
- Ajoute/enlève la classe `banner--open` sur l’élément `header-banner`.

Si tout marche, tu peux ouvrir et fermer le menu en cliquant \\o/

---

## Étape 9 - Event bis

Fais réagir la soumission du formulaire `#contact` :

- Empêche l’actualisation de la page,
- Affiche une alerte : `Hercule ne souhaite pas être dérangé`.

---

## Bonus Étape 10 - Algo

On veut afficher les **pourcentages de votes** pour Hercule et César.

- Les votes sont dans `base.vote` (ex. `base.vote.hercule` et `base.vote.cesar`),
- Calcule les pourcentages : `valeur / total * 100`,
- Affiche les pourcentages dans les deux éléments avec la classe `people__popularity`,
- Change aussi la largeur des barres `.people__bar` avec les pourcentages calculés.

---

## Bonus Étape 11 - Objet avancé

- Regroupe tout ce que tu as fait dans **un gros objet**,
- Mets les données en **propriétés**,
- Mets les fonctions en **méthodes**.

Avance petit à petit pour ne rien casser !

---

## Super Bonus Étape 12 - Algo, la totale

- Tu as dans `base.activities` des tâches,
- Affiche les **titres** dans la liste `#activities`,
- **Mais uniquement** celles d’Hercule **et** terminées (`finished: true`).

---

💪 Bon courage, et que la force d’Hercule soit avec toi !
