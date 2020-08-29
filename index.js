//Les variables
//nombre
const nombre = 42;
console.log(nombre);
//tableau
const tab = [2, 5, 6, 7, 9];
console.log(tab);

//chaine de caracteres
const chaine = "ceci est une chaine de caracteres";
console.log(chaine);
//Conditions

//if, else if ,else
if (nombre >= 50) {
    console.log("super moitmoit");
} else if (nombre >= 40) {
    console.log("peux mieux faire");
} else {
    console.log("la grande réponse");
}

//switch
var longueur = tab.length; 
switch (longueur) {
    case (longueur = 10):
        console.log("il y a 10 éléments dans le tableau");
        break;
    case (longueur = 5):
        console.log("il y a 5 éléments dans le tableau");
        break;
    case (longueur = 0):
        console.log("Je ne connais pas le nombre d'éléments du tableau");
        break;
    default :
    console.log("Aucun tableau trouvé")
    break;
}

//Boucles

//while
let i = 0;
while (i < 5){  
    i++;
    console.log("Messire, on en a gros"); 
    }
 
//for   
let y = 0;
for (y= 0; y < tab.length; y++){  
    
    console.log(tab[y]);
    }    
    