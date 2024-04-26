//Création du profil d'hercule. OBJET
let profil = {
        name: "Hercule",
        job: "Demi-Dieu",
        age: 35,
        department: 75,
        arm: 60.5, 
        inRelationShip: true,
};

//Exécuter l'objet en argument dans la méthode de .base
base.fillProfil(profil);

//Créer un tableau avec les amis d'Hercule
const friends = ["Jupiter", "Junon", "Alcmène", "Déjanire"];
console.log(friends[0]);

//exécuter le tableau dans la méthode de .base
base.printFriends(friends);

//Exécuter l'affichage du meilleur ami en sélectionnant la valeur de Jupiter [0] 
base.setBestFriend(friends[0]);

//DOM

//créer une balise H1
const elementH1 = document.createElement("h1");

//donner la class banner__title à la balise h1
elementH1.classList.add("banner__title");

//j'écris dans la balise
elementH1.textContent = "Vous consultez le profil d'Hercule";

//sélectionner l'ID et le mettre dans une variable
const headerBanner = document.querySelector("#header-banner");
//insérer la variable (ID) dans l'élément
headerBanner.appendChild(elementH1);