//OBJET

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

//TABLEAU

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

//BOUCLE

    const works = document.querySelectorAll('.panel--work');
    for (const work of works) {
        work.classList.remove('hidden');
    }

//CONDITIONS 

    const hour = base.getHour();
    const dispo = document.getElementById("availability");

    if (hour > 20 || hour < 8) {
        dispo.classList.add("off");
    } else {
        dispo.textContent = "disponible";
    }

//FONCTIONS


function pseudo(firstname, number) {
   let myPseudo = firstname + "-du-" + number;
   return myPseudo;
}

const herculePseudo = pseudo(profil.name, profil.department);

const profilName = document.getElementById("profil-name");
profilName.textContent = herculePseudo;

//EVENT

const menu = document.getElementById("menu-toggler");

    menu.addEventListener("click", (event) => {
    headerBanner.classList.toggle("banner--open");
});
    menu.addEventListener("click", event);

//EVENT BIS

const formElement = document.getElementById("contact");

formElement.addEventListener("submit", function (event){;
event.preventDefault();
alert("Hercule ne souhaite pas être dérangé");
});


//ALGO

const popularityHercule = document.querySelector(".hercule__popularity");
const popularityCesar = document.querySelector(".cesar__popularity");
const herculeBar = document.querySelector("#trends-hercule .people__bar");
const cesarBar = document.querySelector("#trends-cesar .people__bar");

const total = base.vote.hercule + base.vote.cesar;

const hercule = Math.round((base.vote.hercule / total)*100);
const cesar = Math.round((base.vote.cesar / total)*100);

popularityHercule.textContent = hercule + "%";
popularityCesar.textContent = cesar + "%";

herculeBar.style.width = `${hercule}%`;
cesarBar.style.width = `${cesar}%`;





