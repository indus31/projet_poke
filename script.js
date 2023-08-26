//CLASS
class stats{

    constructor(pv,attaque,defense,defenseSpe,attSpe,vitesse){
            this.pv = pv;
            this.attaque = attaque;
            this.defense = defense;
            this.defenseSpe = defenseSpe;
            this.attSpe = attSpe;
            this.vitesse = vitesse;

    }               
};
class movePool{
    constructor(attaque1,att1Degat,att1Type,att1DmgClass,attaque2,att2Degat,att2Type,att2DmgClass,attaque3,att3Degat,att3Type,att3DmgClass,attaque4,att4Degat,att4Type,att4DmgClass){
            this.attaque1 = attaque1;
            this.att1Degat = att1Degat;
            this.attaque2 = attaque2;
            this.att2Degat = att2Degat;
            this.attaque3 = attaque3;
            this.att3Degat = att3Degat;
            this.attaque4 = attaque4;
            this.att4Degat = att4Degat;
            this.att1Type = att1Type;
            this.att2Type = att2Type;
            this.att3Type = att3Type;
            this.att4Type = att4Type;
            this.att1DmgClass = att1DmgClass;
            this.att2DmgClass = att2DmgClass;
            this.att3DmgClass = att3DmgClass;
            this.att4DmgClass = att4DmgClass;
    }
            
};
class pokemon{
    constructor(nom,numero,type1,type2,stats,movePool,sprite,backSprite){
            this.nom = nom;
            this.numero = numero;
            this.type1 = type1;
            this.type2 = type2;
            this.stats = stats;
            this.movePool = movePool;
            this.sprite = sprite;
            this.backSprite = backSprite;

    }
};

// APPELS API ///

//genère des attaque avec leur dégats dans un movePool
let APImove = async(moveSet,poke)=>{
    
    
    while( moveSet.attaque1 == undefined || moveSet.att1Degat == undefined){
        let count = 0;
        count ++;
        let nbrMove = randomizer(120);
        let data = await fetch('https://pokeapi.co/api/v2/move/'+ nbrMove);
        let dataTransformed = await data.json();
       
        if(dataTransformed.type.name == poke.type1 ){
            moveSet.attaque1 = dataTransformed.name;
            moveSet.att1Degat= dataTransformed.power;
            moveSet.att1Type = dataTransformed.type.name;
            moveSet.att1DmgClass = dataTransformed.damage_class.name
        }
        if (count > 50){
            console.log(count + " essai atteint");
            return count;
        }
    }        
    
    while( moveSet.attaque2 == undefined || moveSet.att2Degat == undefined){
                let count = 0;
                count ++;
                let nbrMove = randomizer(120);
                let data = await fetch('https://pokeapi.co/api/v2/move/'+ nbrMove);
                let dataTransformed = await data.json();
                if(dataTransformed.type.name == poke.type1){
                    moveSet.attaque2 = dataTransformed.name;
                    moveSet.att2Degat= dataTransformed.power;
                    moveSet.att2Type = dataTransformed.type.name;
                    moveSet.att2DmgClass = dataTransformed.damage_class.name
                }
                if (count > 50){
                    console.log(count + " essai atteint");
                    return count;
                }
    }

    while( moveSet.attaque3 == undefined || moveSet.att3Degat == undefined){
        let count = 0;
        count ++;
        let nbrMove = randomizer(120);
        let data = await fetch('https://pokeapi.co/api/v2/move/'+ nbrMove);
        let dataTransformed = await data.json();
        if(dataTransformed.type.name == poke.type1 || dataTransformed.type.name == poke.type2 || dataTransformed.type.name == "normal" ){
            moveSet.attaque3 = dataTransformed.name;
            moveSet.att3Degat= dataTransformed.power;
            moveSet.att3Type = dataTransformed.type.name;
            moveSet.att3DmgClass = dataTransformed.damage_class.name
        }
        if (count > 50){
            console.log(count + " essai atteint");
            return count;
        }
    }
    while( moveSet.attaque4 == undefined || moveSet.att4Degat == undefined){
        let count = 0;
        count ++;
        let nbrMove = randomizer(120);
        let data = await fetch('https://pokeapi.co/api/v2/move/'+ nbrMove);
        let dataTransformed = await data.json();
        if(dataTransformed.type.name == poke.type1 || dataTransformed.type.name == poke.type2 || dataTransformed.type.name == "normal" ){
            moveSet.attaque4 = dataTransformed.name;
            moveSet.att4Degat= dataTransformed.power;
            moveSet.att4Type = dataTransformed.type.name;
            moveSet.att4DmgClass = dataTransformed.damage_class.name
        }
        if (count > 50){
            console.log(count + " essai atteint");
            return count;
        }
    }          
}


        //else{
        //     pokemon.type2.innerHTML = "none";
        // }

        

        // }else if(i == 1){
        // foe2.nom = dataTransformed.species.name;
        // foe2.numero = nbr;
    
        // statFoe2.pv = dataTransformed.stats[0].base_stat;
        // statFoe2.attaque = dataTransformed.stats[1].base_stat;
        // statFoe2.defense = dataTransformed.stats[2].base_stat;
        // statFoe2.attSpe = dataTransformed.stats[3].base_stat;
        // statFoe2.defenseSpe = dataTransformed.stats[4].base_stat;
        // statFoe2.vitesse = dataTransformed.stats[5].base_stat;
        // foe2.sprite = "./sprites/sprites/pokemon/"+ nbr + ".png";
        // foe2.backSprite ="./sprites/sprites/pokemon/back/"+ nbr +".png";
        
    
        // foe2.type1= dataTransformed.types[0].type.name;
        // foe2.type2 = dataTransformed.types[1].type.name;
        // }else if (i == 2){
        // foe3.nom = dataTransformed.species.name;
        // foe3.numero = nbr;
    
        // statFoe3.pv = dataTransformed.stats[0].base_stat;
        // statFoe3.attaque = dataTransformed.stats[1].base_stat;
        // statFoe3.defense = dataTransformed.stats[2].base_stat;
        // statFoe3.attSpe = dataTransformed.stats[3].base_stat;
        // statFoe3.defenseSpe = dataTransformed.stats[4].base_stat;
        // statFoe3.vitesse = dataTransformed.stats[5].base_stat;
        // foe3.sprite = "./sprites/sprites/pokemon/"+ nbr + ".png";
        // foe3.backSprite ="./sprites/sprites/pokemon/back/"+ nbr +".png";
        
    
        // foe3.type1= dataTransformed.types[0].type.name;
        // foe3.type2 = dataTransformed.types[1].type.name;
        // }
    

























/*MENU DEMARRER*/

/*Variables*/
let gifOr = document.querySelector(".gif");
let intro = document.createElement("img");
let ecranBlanc = document.createElement("div");
/*buttonStart*/
let buttonStart = document.createElement("button");
afficherApp(buttonStart);
/*Animation de départ*/

sourceURL(intro,"./img/ect_vs_ron.gif");
afficherApp(intro);
bonFormat(intro,800,750);
defPos(intro,384,1827);
/*Ecran blanc */
ecranBlanc.style.backgroundColor= "lightgrey";
afficherApp(ecranBlanc);
bonFormat(ecranBlanc,800,750);
defPos(ecranBlanc,384,687);
masquer(ecranBlanc);




         /*style buttonStart*/
bonFormat(buttonStart,150,100);
defPos(buttonStart,400,1650);
buttonStart.innerHTML= "start";
buttonStart.style.borderRadius = 100+"px";
buttonStart.style.fontSize = 24+"px";

            /*event au buttonStart*/
let nbr = 0;
buttonStart.addEventListener("click",async function(){
    afficherSelection();
    masquer(buttonStart);
    console.log("j'ai clické sur le bouton");
    nbr ++;
    
    
    console.log(nbr);
    let urlApi = 'https://pokeapi.co/api/v2/pokemon/'+ nbr;
   
    let data = await fetch(urlApi);
    let dataTransformed = await data.json();
    imgPokemon.src = dataTransformed.sprites.front_default;
    nomPokemon.innerHTML = dataTransformed.species.name;
    type1.innerHTML = dataTransformed.types[0].type.name + ' ';
    if(dataTransformed.types.length == 2){
        type2.innerHTML = dataTransformed.types[1].type.name;
    }
    masquer(imgEquipe1);
    masquer(imgEquipe2);
    masquer(imgEquipe3);
})




            /*cadre information*/
let informations = document.createElement("div");
informations.innerHTML = `nombre de victoire :</br>
nombre de défaite : </br>
nombre de combat :`;
informations.style.fontSize = 28+"px";

informations.style.border= "black 2px solid";
afficherApp(informations);
bonFormat(informations,300,100);
defPos(informations,400,1000);


/*API*/


// const pokemonListe = document.createElement('div');
// bonFormat(pokemonListe,800,750);
// defPos(pokemonListe,384,687);
// afficherApp(pokemonListe);
// console.log(pokemonListe);
// // de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
// const pokemonApiContact = async () => {
//     //Data va récup Toutes les données de l'api
//     const pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=150");
//     console.log('pokemonData',pokemonData);
//     //Plutot que de Travailler sur la réponse, on va la transformé pour 
//     //qu'elle deviennt un OBJET JS (+ pratique)
//     const pokemonDataTransformed = await pokemonData.json();
//     console.log('pokemonDataTransformed',pokemonDataTransformed);
//     console.log(pokemonDataTransformed.results[0].name);
//     // Boucle pour parcourir le tableau results dans la réponse
//     for(let i=0;i<pokemonDataTransformed.results.length;i++){
//         let listElement = document.createElement('p');
//          console.log(pokemonDataTransformed.results[i].name);
//         pokemonListe.append(listElement);
//         // listElement.innerText
//     }
//     const pokemonName = document.createElement('h1');
//     pokemonName.innerText = pokemonDataTransformed.results[0].name;
//     document.body.append(pokemonName);
// };
// pokemonApiContact();


/*ECRAN DE SELECTION*/
        //ecran
let ecranSelection = document.createElement("div");
ecranSelection.style.backgroundColor= "lightgrey";
bonFormat(ecranSelection,800,750);
defPos(ecranSelection,384,1827);
afficherApp(ecranSelection);
        //pokeball
let pokeballSelection =  document.createElement("img");
sourceURL(pokeballSelection,"./img/pokeball.png");
bonFormat(pokeballSelection,50,50);
defPos(pokeballSelection,395,2135);
afficherApp(pokeballSelection);

        //pokeball2
let pokeballSelection2 =  document.createElement("img");
sourceURL(pokeballSelection2,"./img/pokeball.png");
bonFormat(pokeballSelection2,50,50);
defPos(pokeballSelection2,495,2135);
afficherApp(pokeballSelection2);

        //pokeball3
let pokeballSelection3 =  document.createElement("img");
sourceURL(pokeballSelection3,"./img/pokeball.png");
bonFormat(pokeballSelection3,50,50);
defPos(pokeballSelection3,595,2135);
afficherApp(pokeballSelection3);

        //description
let descriptionPoke = document.createElement("div");
descriptionPoke.style.border = "dashed black 2px";
bonFormat(descriptionPoke,400,500);
defPos(descriptionPoke,388,2200);
afficherApp(descriptionPoke);

        //contenu description
let textDescription = document.createElement("div");
textDescription.style.border = "solid black 2px";
bonFormat(textDescription,400,150);
defPos(textDescription,900,2200);
afficherApp(textDescription);

        //bouton suivant
let buttonSuivant = document.createElement("button");
buttonSuivant.innerHTML= "suivant";
buttonSuivant.style.borderRadius = 100+"px";
buttonSuivant.style.fontSize = 24+"px";
defPos(buttonSuivant,1080,2200);
afficherApp(buttonSuivant);

        //bouton précédent
let buttonPrecedent = document.createElement("button");
buttonPrecedent.innerHTML= "précédent";
buttonPrecedent.style.borderRadius = 100+"px";
buttonPrecedent.style.fontSize = 24+"px";
defPos(buttonPrecedent,1080,2500);
afficherApp(buttonPrecedent);


       //bouton ajouter
let buttonAjouter = document.createElement("button");
buttonAjouter.innerHTML= "ajouter";
buttonAjouter.style.borderRadius = 100+"px";
buttonAjouter.style.fontSize = 24+"px";
defPos(buttonAjouter,1080,2350);
afficherApp(buttonAjouter);

//EVENT MENU SELECTION


//paragraphes decription pokemon
let nomPokemon = document.createElement("p");
nomPokemon.innerHTML = 'nom';
defPos(nomPokemon,730,2390);

let type1 = document.createElement("p");
type1.innerHTML='type';
defPos(type1,760,2480);

let type2 = document.createElement("p");
type2.innerHTML = 'type2';
defPos(type2,760,2300);

let imgPokemon = document.createElement("img");
bonFormat(imgPokemon,300,300);
defPos(imgPokemon,430,2250);

let equipeTableaux = document.createElement("p");

let imgEquipe1 = document.createElement("img");
bonFormat(imgEquipe1,100,100);
defPos(imgEquipe1,360,2000);

let imgEquipe2 = document.createElement("img");
defPos(imgEquipe2,460,2000);
bonFormat(imgEquipe2,100,100);

let imgEquipe3 = document.createElement("img");
defPos(imgEquipe3,560,2000);
bonFormat(imgEquipe3,100,100);

document.body.append(nomPokemon);
document.body.append(type1);
document.body.append(type2);
document.body.append(imgPokemon);
document.body.append(equipeTableaux);
document.body.append(imgEquipe1 );
document.body.append(imgEquipe2 );
document.body.append(imgEquipe3 );
sourceURL(imgEquipe1,"./img/Bulbizarre-RB.png");
sourceURL(imgEquipe2,"./img/Bulbizarre-RB.png");
sourceURL(imgEquipe3,"./img/Bulbizarre-RB.png");
imgEquipe1.style.display="none";





//event testbutton

let countPokemon = 0;
let compteur = document.createElement("p");
afficherApp(compteur);
compteur.style.fontSize=`50px`;
compteur.innerHTML = countPokemon;
defPos(compteur,150,2000);
console.log(nbr);

//fonction de création de pokemon

 async function createPokemon(poke,sta){

    let urlApi = 'https://pokeapi.co/api/v2/pokemon/'+ nbr;
    
    let data = await fetch(urlApi);
    let dataTransformed = await data.json();
    poke.nom = dataTransformed.species.name;
    poke.numero = nbr;
    sta.pv = dataTransformed.stats[0].base_stat;
    sta.attaque = dataTransformed.stats[1].base_stat;
    sta.defense = dataTransformed.stats[2].base_stat;
    sta.attSpe = dataTransformed.stats[3].base_stat;
    sta.defenseSpe = dataTransformed.stats[4].base_stat;
    sta.vitesse = dataTransformed.stats[5].base_stat;
    poke.sprite = dataTransformed.sprites.front_default;
    poke.backSprite =dataTransformed.sprites.back_default;
    poke.type1 = dataTransformed.types[0].type.name;
    if(dataTransformed.types.length == 2){
        poke.type2 = dataTransformed.types[1].type.name;
    }else{
        poke.type2 = "none";
    }
}

async function fillRandomPokemon(poke,sta,mo){
    let randomNbr = randomizer(150)
    let urlApi = 'https://pokeapi.co/api/v2/pokemon/'+ randomNbr;
    
    let data = await fetch(urlApi);
    let dataTransformed = await data.json();
    poke.nom = dataTransformed.species.name;
    poke.numero = nbr;
    sta.pv = dataTransformed.stats[0].base_stat;
    sta.attaque = dataTransformed.stats[1].base_stat;
    sta.defense = dataTransformed.stats[2].base_stat;
    sta.attSpe = dataTransformed.stats[3].base_stat;
    sta.defenseSpe = dataTransformed.stats[4].base_stat;
    sta.vitesse = dataTransformed.stats[5].base_stat;
    poke.sprite = dataTransformed.sprites.front_default;
    poke.backSprite =dataTransformed.sprites.back_default;
    poke.type1 = dataTransformed.types[0].type.name;
    if(dataTransformed.types.length == 2){
        poke.type2 = dataTransformed.types[1].type.name;
    }else{
        poke.type2 = "none";
    }
    APImove(mo,poke);
 }






//BOUTON AJOUTER + CREATION POKEMON
//joueur
let pokemon1 = new pokemon ;
let pokemon2 = new pokemon ;
let pokemon3 = new pokemon ;
let stat1 = new stats;
let stat2 = new stats;
let stat3 = new stats;
let movePool1 = new movePool;
let movePool2 = new movePool;
let movePool3 = new movePool;
//adversaire
let RDpokemon1 = new pokemon ;
let RDpokemon2 = new pokemon ;
let RDpokemon3 = new pokemon ;
let RDstat1 = new stats;
let RDstat2 = new stats;
let RDstat3 = new stats;
let RDmovePool1 = new movePool;
let RDmovePool2 = new movePool;
let RDmovePool3 = new movePool;


buttonAjouter.addEventListener("click",async function(){
    countPokemon ++;
    console.log(countPokemon);
    console.log("j'ai clické sur le bouton ajouter");
    let numeroEquipier = nbr;
    // player.equipe += numeroEquipier;
    
    
    // imgPokemon.src = "./sprites/sprites/pokemon/"+ nbr + ".png";
    let urlApi = 'https://pokeapi.co/api/v2/pokemon/'+ nbr;
    
    console.log("le compteur de pokemon est à "+ countPokemon);
    let data = await fetch(urlApi);
    let dataTransformed = await data.json();
    
    //affichage tableaux équipe
    equipeTableaux.innerHTML += dataTransformed.species.name;
    equipeTableaux.innerHTML += dataTransformed.types[0].type.name + ' ';
    if(dataTransformed.types.length == 2){
        equipeTableaux.innerHTML += dataTransformed.types[1].type.name;
    }
    
    if(countPokemon == 1){
        
        compteur.innerHTML = countPokemon;
        console.log("countPokemon = " +countPokemon);
        imgEquipe1.src = dataTransformed.sprites.front_default;
        afficher(imgEquipe1);
        createPokemon(pokemon1,stat1);
        APImove(movePool1,pokemon1);
        player.equipe.push(pokemon1);
        player.stat.push(stat1);
        player.movePool.push(movePool1);
        
    }else if(countPokemon == 2){
        
        compteur.innerHTML = countPokemon;
        console.log("countPokemon = " + countPokemon);
        imgEquipe2.src = dataTransformed.sprites.front_default;
        afficher(imgEquipe2);
        createPokemon(pokemon2,stat2);
        APImove(movePool2,pokemon2);
        player.equipe.push(pokemon2);
        player.stat.push(stat2);
        player.movePool.push(movePool2);

    }else if(countPokemon == 3){
        
        compteur.innerHTML = countPokemon;
        console.log("countPokemon = " + countPokemon);
        imgEquipe3.src = dataTransformed.sprites.front_default;
        afficher(imgEquipe3);
        createPokemon(pokemon3,stat3);
        APImove(movePool3,pokemon3);
        player.equipe.push(pokemon3);
        player.stat.push(stat3);
        player.movePool.push(movePool3);
        masquer(buttonAjouter);
    }

    }
  
);
console.log(pokemon1,pokemon2,pokemon3);

console.log(stat1,stat2,stat3);
console.log(movePool1,movePool2,movePool3);



fillRandomPokemon(RDpokemon1,RDstat1,RDmovePool1);
fillRandomPokemon(RDpokemon2,RDstat2,RDmovePool2);
fillRandomPokemon(RDpokemon3,RDstat3,RDmovePool3);

























//joueur + équipe joueur

let player = {
    equipe : [],
    stat:[],
    movePool:[]
}
//opponent
let adversaire = {
    equipe :[RDpokemon1,RDpokemon2,RDpokemon3],
    stat:[RDstat1,RDstat2,RDstat3],
    movePool:[RDmovePool1,RDmovePool2,RDmovePool3]
}
console.log(player);
console.log(adversaire);
//bouton commencer combat

let buttonStartCombat = document.createElement("button");
buttonStartCombat.innerHTML="Let's GO !"
document.body.append(buttonStartCombat);

buttonStartCombat.style.borderRadius = 100+"px";
buttonStartCombat.style.fontSize = 24+"px";
defPos(buttonStartCombat,660,1950);

masquer(buttonStartCombat);
//affichage bouton startCombat
if (player.equipe.length == 3){
    afficher(buttonStartCombat);
}
console.log(player);

//bouton précédent
buttonPrecedent.addEventListener("click",async function(){
    console.log("j'ai clické sur le bouton");
   
    nbr --;
    console.log(nbr);
    
    let urlApi = 'https://pokeapi.co/api/v2/pokemon/'+ nbr;
   
    let data = await fetch(urlApi);
    let dataTransformed = await data.json();
    console.log(dataTransformed.types.length);
    imgPokemon.src = dataTransformed.sprites.front_default;
    nomPokemon.innerHTML = dataTransformed.species.name;
    type1.innerHTML = dataTransformed.types[0].type.name + ' ';
    if(dataTransformed.types.length == 2){
        type2.innerHTML = dataTransformed.types[1].type.name;
    }else{
        type2.innerHTML = "none";
    }    
});
//bouton suivant
buttonSuivant.addEventListener("click",async function(){
    console.log("j'ai clické sur le bouton");
    nbr ++;
    
    
    console.log(nbr);
    let urlApi = 'https://pokeapi.co/api/v2/pokemon/'+ nbr;
    
    let data = await fetch(urlApi);
    let dataTransformed = await data.json();
    imgPokemon.src = dataTransformed.sprites.front_default;
    nomPokemon.innerHTML = dataTransformed.species.name;
    type1.innerHTML = dataTransformed.types[0].type.name + ' ';
    if(dataTransformed.types.length == 2){
        type2.innerHTML = dataTransformed.types[1].type.name;
    }else{
        type2.innerHTML = "none";
    }   
});










/***ECRAN COMBAT */

        //écran
let ecranCombat = document.createElement("div");

ecranCombat.style.backgroundColor= "lightgrey";
bonFormat(ecranCombat,800,750);
defPos(ecranCombat,384,1827);
afficherApp(ecranCombat);

        //menu
let pad = document.createElement("div");
pad.style.border = "solid 2px black";
bonFormat(pad,750,200);
defPos(pad,900,1850);
afficherApp(pad);

        //bouton pad

//button attaque


let buttonPadAttack = document.createElement("button");
buttonPadAttack.innerHTML = "attaque";
buttonPadAttack.style.fontSize = 50 +"px";
bonFormat(buttonPadAttack,250,80);
defPos(buttonPadAttack,920,2340);
afficherApp(buttonPadAttack);


//bouton attaque1

let buttonPadAttack1 = document.createElement("button");
buttonPadAttack1.innerHTML = "attaque1";
buttonPadAttack1.style.fontSize = 50 +"px";
bonFormat(buttonPadAttack1,300,80);
defPos(buttonPadAttack1,920,2230);
afficherApp(buttonPadAttack1);

//bouton attaque2

let buttonPadAttack2 = document.createElement("button");
buttonPadAttack2.innerHTML = "attaque2";
buttonPadAttack2.style.fontSize = 50 +"px";
bonFormat(buttonPadAttack2,300,80);
defPos(buttonPadAttack2,920,1930);
afficherApp(buttonPadAttack2);

//bouton attaque3

let buttonPadAttack3 = document.createElement("button");
buttonPadAttack3.innerHTML = "attaque3";
buttonPadAttack3.style.fontSize = 50 +"px";
bonFormat(buttonPadAttack3,300,80);
defPos(buttonPadAttack3,1010,1930);
afficherApp(buttonPadAttack3);

//bouton attaque4

let buttonPadAttack4 = document.createElement("button");
buttonPadAttack4.innerHTML = "attaque4";
buttonPadAttack4.style.fontSize = 50 +"px";
bonFormat(buttonPadAttack4,300,80);
defPos(buttonPadAttack4,1010,2230);
afficherApp(buttonPadAttack4);



//EVENT


//button changer

let buttonPadChanger= document.createElement("button");
buttonPadChanger.innerHTML = "changer";
buttonPadChanger.style.fontSize = 50 +"px";
bonFormat(buttonPadChanger,250,80);
defPos(buttonPadChanger,920,2040);
afficherApp(buttonPadChanger);


        //POKEMON JOUEUR

let imgJoueur = document.createElement("img");
sourceURL(imgJoueur,"./img/bck_cara.png");
bonFormat(imgJoueur,400,400);
defPos(imgJoueur,550,2250);
afficherApp(imgJoueur);

        //nom pokemon joueur
let nomPokeJoueur = document.createElement("p");
nomPokeJoueur.innerHTML = "carapuce";
nomPokeJoueur.style.fontSize = 50 + "px";
defPos(nomPokeJoueur,720,1950);
afficherApp(nomPokeJoueur);

        //barre de vie joueur
let lifeBarJoueur = document.createElement("div");
lifeBarJoueur.style.border = "2px solid black";
//bar
bonFormat(lifeBarJoueur,250,15);
defPos(lifeBarJoueur,840,1900);
afficherApp(lifeBarJoueur);

//contenu bar
let contentBarJoueur = document.createElement("div");
contentBarJoueur.style.border = "2px solid black";
contentBarJoueur.style.backgroundColor = "green";
bonFormat(contentBarJoueur,250,15);
defPos(contentBarJoueur,840,1900);
afficherApp(contentBarJoueur);
//point de vie
let hitPoint = document.createElement("p");
hitPoint.innerHTML = "100 / 100";
hitPoint.style.fontSize = 35 + "px";
defPos(hitPoint,825,1950);
afficherApp(hitPoint);




       //POKEMON ADVERSAIRE
let imgAdversaire = document.createElement("img");
sourceURL(imgAdversaire,"./img/Salamèche-RB.png");
bonFormat(imgAdversaire,400,300);
defPos(imgAdversaire,400,1850);
afficherApp(imgAdversaire);

       //nom pokemon adversaire
let nomPokeAdversaire = document.createElement("p");
nomPokeAdversaire.innerHTML = "Salamèche";
nomPokeAdversaire.style.fontSize = 50 + "px";
defPos(nomPokeAdversaire,360,2400);
afficherApp(nomPokeAdversaire);


    //barre de vie adversaire
 let lifeBarAdversaire = document.createElement("div");
 lifeBarAdversaire.style.border = "2px solid black";
 //bar
 bonFormat(lifeBarAdversaire,250,15);
 defPos(lifeBarAdversaire,480,2370);
 afficherApp(lifeBarAdversaire);
 
 //contenu bar
 let contentBarAdversaire = document.createElement("div");

 contentBarAdversaire.style.backgroundColor = "green";
 bonFormat(contentBarAdversaire,250,15);
 defPos(contentBarAdversaire,480,2370);
 afficherApp(contentBarAdversaire);

 //point de vie2
 let hitPoint2 = document.createElement("p");
 hitPoint2.innerHTML = "100 / 100";
 hitPoint2.style.fontSize = 35 + "px";
 defPos(hitPoint2,475,2440);
 afficherApp(hitPoint2);


 //EVENT START COMBAT
let totalPv ; 
let currentPv ;
hitPoint.innerHTML;

let totalPv2 = adversaire.stat[0].pv;
let currentPv2 = adversaire.stat[0].pv;
hitPoint2.innerHTML = currentPv2 +"/" + totalPv2;

buttonStartCombat.addEventListener("click",async function(){
    masquerSelection();
    affichageEcranCombat();
    sourceURL(imgJoueur,player.equipe[0].backSprite);
    nomPokeJoueur.innerHTML = player.equipe[0].nom;
    totalPv = player.stat[0].pv;
    currentPv = player.stat[0].pv;
    hitPoint.innerHTML = currentPv +"/" + totalPv; 


    sourceURL(imgAdversaire,adversaire.equipe[0].sprite);
    nomPokeAdversaire.innerHTML = adversaire.equipe[0].nom;
    totalPv2 = adversaire.stat[0].pv;
    currentPv2 = adversaire.stat[0].pv;
    hitPoint2.innerHTML = currentPv2 +"/" + totalPv2;

    

});

function logiqueCombat(attaque1){
    let vitesse1 = player.stat[0].vitesse;
    let vitesse2 =adversaire.stat[0].vitesse;
    if(player.stat[0].vitesse>adversaire.stat[0].vitesse){
    alert(`vous attaquez en premier avec ${vitesse1}de vitesse contre ${vitesse2}`);
    

    }else if(player.stat[0].vitesse>adversaire.stat[0].vitesse){
        alert(`adversaire attaque en premier avec ${vitesse2}contre ${vitesse1}`);
    }

};

buttonPadAttack.addEventListener("click",async function(){
    masquerPad1();
    afficherPadAttaque();
    buttonPadAttack1.innerHTML = player.movePool[0].attaque1;
    buttonPadAttack2.innerHTML = player.movePool[0].attaque2;
    buttonPadAttack3.innerHTML = player.movePool[0].attaque3;
    buttonPadAttack4.innerHTML = player.movePool[0].attaque4;
});


let feu = 'fire' ;//done
let combat = 'fighting';
let insecte = 'bug';
let sol = 'ground';//done
let normal = 'normal';
let plante = 'grass';//done
let tenebre = 'dark';
let poison = 'poison';
let psy = 'psychic';
let glace = 'ice';
let foudre = 'electric';
let spectre = 'ghost';
let dragon = 'dragon';
let vol = 'flying';//done
let roche = 'rock';
let eau = 'water';//done
async function recuperationType(nb,element){
    let urlApi = 'https://pokeapi.co/api/v2/pokemon/'+ nb;
    let data = await fetch(urlApi);
    let dataTransformed = await data.json();
    element = dataTransformed.type[0].name;
}
// recuperationType(1,plante);
// recuperationType(4,feu);
// recuperationType(7,eau);


let totalDegatInflige = 0;

function calculCombatAtt1(pla,adv,i){
    
    let typeAttaque = pla.movePool.att1Type
    let typeCible1 = adv.equipe[i].type1;
    let typeCible2 = adv.equipe[i].type2;
    let totalDegat = 0;
    if(pla.movePool.att1DmgClass =="special"){
        totalDegat += (pla.stat[i].attaque + pla.movePool[i].att1Degat ) - (adv.stat[i].defense);
    }else if(pla.movePool.att1DmgClass =="physical"){
        totalDegat += (pla.stat[i].attaque + pla.movePool[i].att1Degat ) - (adv.stat[i].defenseSpe);
    }
    //type feu
    if(typeAttaque == feu && typeCible1 == plante|| typeCible2 == plante){
        alert(`c'est super efficace !`);
        totalDegat += 20;
    }else if(typeAttaque == feu && typeCible1 == insecte|| typeCible2 == insecte){ 
    
        alert(`c'est super efficace !`);
        totalDegat += 20;
    }
    if(typeAttaque == feu && typeCible1 == glace|| typeCible2 == glace){
        alert(`c'est super efficace !`);
        totalDegat += 20;
    }
    if(typeAttaque == feu && typeCible1 == eau|| typeCible2 == eau){
        alert(`ce n'est pas très efficace....`);
        totalDegat -= 30;
    }
    if(typeAttaque == feu && typeCible1 == sol|| typeCible2 == sol){
        alert(`ce n'est pas très efficace....`);
        totalDegat -= 30;
    }
    if(typeAttaque == feu && typeCible1 == roche|| typeCible2 == roche){
        alert(`ce n'est pas très efficace....`);
        totalDegat -= 30;
    }
    if(typeAttaque == feu && typeCible1 == feu|| typeCible2 == feu){
        alert(`ce n'est pas très efficace....`);
        totalDegat -= 30;
    }
    //type plante
    if(typeAttaque == plante && typeCible1 == sol|| typeCible2 == sol){
        alert(`c'est super efficace !`);
        totalDegat += 20;
    }else if(typeAttaque == plante && typeCible1 == eau|| typeCible2 == eau){
    
        alert(`c'est super efficace !`);
        totalDegat += 20;
    }else if(typeAttaque == plante && typeCible1 == roche|| typeCible2 == roche){
    
        alert(`c'est super efficace !`);
        totalDegat += 20;
    }
    if(typeAttaque == plante && typeCible1 == feu|| typeCible2 == feu){
        alert(`ce n'est pas très efficace....`);
        totalDegat -= 30;
    }
    if(typeAttaque == plante && typeCible1 == plante|| typeCible2 == plante){
        alert(`ce n'est pas très efficace....`);
        totalDegat -= 30;
    }
    if(typeAttaque == plante && typeCible1 == foudre|| typeCible2 == foudre){
        alert(`ce n'est pas très efficace....`);
        totalDegat -= 30;
    }
    if(typeAttaque == plante && typeCible1 == feu || typeCible2 == feu){
        alert(`ce n'est pas très efficace....`);
        totalDegat -= 30;
    }
    if(typeAttaque == plante && typeCible1 == poison|| typeCible2 == poison){
        alert(`ce n'est pas très efficace....`);
        totalDegat -= 30;
    }
    if(typeAttaque == plante && typeCible1 == insecte|| typeCible2 == insecte){
        alert(`ce n'est pas très efficace....`);
        totalDegat -= 30;
    }
    //type eau
    if(typeAttaque == eau && typeCible1 == feu|| typeCible2 == feu){
        alert(`c'est super efficace !`);
        totalDegat += 20;
    }
    if(typeAttaque == eau && typeCible1 == sol|| typeCible2 == sol){
        alert(`c'est super efficace !`);
        totalDegat += 20;
    }
    if(typeAttaque == eau && typeCible1 == roche|| typeCible2 == roche){
        alert(`c'est super efficace !`);
        totalDegat += 20;
    }
    if(typeAttaque == eau && typeCible1 == eau|| typeCible2 == eau){
        alert(`ce n'est pas très efficace....`);
        totalDegat -= 30;
    }
    //type vol
    if(typeAttaque == vol && typeCible1 == insecte|| typeCible2 == insecte){
        alert(`c'est super efficace !`);
        totalDegat += 20;
    }
    if(typeAttaque == vol && typeCible1 == plante|| typeCible2 == plante){
        alert(`c'est super efficace !`);
        totalDegat += 20;
    }
    if(typeAttaque == vol && typeCible1 == combat|| typeCible2 == combat){
        alert(`c'est super efficace !`);
        totalDegat += 20;
    }
    if(typeAttaque == vol && typeCible1 == roche|| typeCible2 == roche){
        alert(`ce n'est pas très efficace....`);
        totalDegat -= 30;
    }
    
    if(typeAttaque == vol && typeCible1 == foudre|| typeCible2 == foudre){
        alert(`ce n'est pas très efficace....`);
        totalDegat -= 30;
    }
//type sol
    if(typeAttaque == sol && typeCible1 == vol|| typeCible2 == vol){
            alert(`pas d'effet sur ${nomPokeAdversaire.innerHTML} adverse`);
            totalDegat = 0;
        }
    if(typeAttaque == sol && typeCible1 == feu|| typeCible2 == feu){
            alert(`c'est super efficace !`);
            totalDegat += 20;
        }
    if(typeAttaque == sol && typeCible1 == sol|| typeCible2 == sol){
            alert(`c'est super efficace !`);
            totalDegat += 20;
        }
    if(typeAttaque == sol && typeCible1 == roche|| typeCible2 == roche){
            alert(`c'est super efficace !`);
            totalDegat += 20;
        }
    if(typeAttaque == sol && typeCible1 == foudre|| typeCible2 == foudre){
            alert(`c'est super efficace !`);
            totalDegat += 20;
        }
    if(typeAttaque == sol && typeCible1 == eau|| typeCible2 == eau){
            alert(`ce n'est pas très efficace....`);
            totalDegat -= 30;
        }                
// combat
    if(typeAttaque == combat && typeCible1 == roche|| typeCible2 == roche){
            alert(`c'est super efficace !`);
            totalDegat += 20;
        }
    if(typeAttaque == combat && typeCible1 == tenebre|| typeCible2 == tenebre){
            alert(`c'est super efficace !`);
            totalDegat += 20;
        }
totalDegatInflige = totalDegat;       
currentPv2   =  currentPv2 - totalDegatInflige;
hitPoint2.innerHTML = currentPv2 +"/" + totalPv2;
}


//button attaque1
buttonPadAttack1.addEventListener("click",function(){
    logiqueCombat();
    calculCombatAtt1(player,adversaire,0);
    

})







masquerPadAttaque();
masquerPad1();
affichagePad1();
masquerEcranCombat();








imgJoueur,nomPokeJoueur,
imgAdversaire,nomPokeAdversaire,hitPoint2




















/*SCRIPT*/

/*variable Script*/
let timer = 5;
function afficherIntro(){
    const countDown = setInterval(function() {
        if(timer > 0) {
            afficher(intro);
        }
        else{
            
           masquer(intro);
           
            //Pour ne pas gaspiller des performances pour rien
            // C'est pour ca qu'on a stocker le setInterval dans une variable countDown 
            clearInterval(countDown);
        }
        console.log("fin d'animation dans "+timer+"secondes");
        timer--;
    },1070);
};
afficherIntro();
// masquerSelection();
masquerEcranCombat();
afficherSelection();









//FONCTION AFFICHAGES


//ecran de selection
function masquerSelection(){
    masquer( pokeballSelection);
    masquer(pokeballSelection2);
    masquer(pokeballSelection3);
    masquer(descriptionPoke);
    masquer(textDescription);
    masquer(buttonSuivant);
    masquer(buttonPrecedent);
    masquer(buttonAjouter);
    masquer(ecranSelection);
    masquer(buttonStartCombat);
    masquer(imgEquipe1);
    masquer(imgEquipe2);
    masquer(imgEquipe3);
    masquer(imgPokemon);
    masquer(nomPokemon);
    masquer(type1);
    masquer(type2);

};

function afficherSelection(){
    afficher(pokeballSelection);
    afficher(pokeballSelection2);
    afficher(pokeballSelection3);
    afficher(descriptionPoke);
    afficher(textDescription);
    afficher(buttonSuivant);
    afficher(buttonPrecedent);
    afficher(buttonAjouter);
    afficher(ecranSelection);
    afficher(buttonStartCombat);
    afficher(imgEquipe1);
    afficher(imgEquipe2);
    afficher(imgEquipe3);
    afficher(imgPokemon);
    masquer(nomPokemon);
    afficher(type1);
    afficher(type2);
};

//ecran de combat
// afficher(ecranCombat);
// afficher(lifeBarAdversaire);
// afficher(lifeBarJoueur);
// afficher(contentBarAdversaire);
// afficher(contentBarJoueur);
// afficher(hitPoint);
// afficher(hitPoint2);
function masquerEcranCombat(){
    masquerPad1();
    masquer(ecranCombat);
    masquer(lifeBarAdversaire);
    masquer(lifeBarJoueur);
    masquer(contentBarAdversaire);
    masquer(contentBarJoueur);
    masquer(hitPoint2);
    masquer(hitPoint);
    masquer(imgAdversaire);
    masquer(imgJoueur);
    masquer(nomPokeAdversaire);
    masquer(nomPokeJoueur);
    masquer(pad);

}
function masquerPadAttaque(){
    masquer(buttonPadAttack1);
    masquer(buttonPadAttack2);
    masquer(buttonPadAttack3);
    masquer(buttonPadAttack4);

}
function afficherPadAttaque(){
   afficher(buttonPadAttack1);
   afficher(buttonPadAttack2);
   afficher(buttonPadAttack3);
   afficher(buttonPadAttack4);
}
function masquerPad1(){

    masquer(buttonPadChanger);
    masquer(buttonPadAttack);
}
function affichagePad1(){
    afficher(buttonPadChanger);
    afficher(buttonPadAttack);
}

function affichageEcranCombat(){
    affichagePad1();
    afficher(ecranCombat);
    afficher(lifeBarAdversaire);
    afficher(lifeBarJoueur);
    afficher(contentBarAdversaire);
    afficher(contentBarJoueur);
    afficher(hitPoint2);
    afficher(hitPoint);
    afficher(imgAdversaire);
    afficher(imgJoueur);
    afficher(nomPokeAdversaire);
    afficher(nomPokeJoueur);
    afficher(pad);
  
}








/******FONCTIONS UTILS */
function randomizer(a){
    let choose = Math.floor((Math.random() * a)+1);
    return choose;         
}

function afficherDans(element1,element2){
    element1.append(element2);
}
function afficherApp(element){
    document.body.append(element);
}
function sourceURL(element,url){
    element.src = url;   
}
function bonFormat(img,width,height){
    img.style.width=`${width}px`;
    img.style.height =`${height}px`;
}
function bonFormatPr(img,width,height){
    img.style.width=`${width}%`;
    img.style.height =`${height}%`;
}
function formatBouton(button,width,height){
    button.style.width=`${width}px`;
    button.style.height =`${height}px`;
}
function defPos(element,top,right){
    element.style.position = "absolute";
    element.style.top = `${top}px`;
    element.style.right = `${right}px`;
}
function afficher(element){
    element.style.display = "block";
}
function masquer(element){
    element.style.display = "none";
}
