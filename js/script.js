
document.addEventListener("DOMContentLoaded", function(event) {

//le jeu
    class Jeu{
        constructor(_idSvg, _idPointage) {//mis une _ pour comprendre cest des parametres , pas se melanger
            console.log("Création du jeu");
            this.s= Snap(_idSvg);
            this.sortiePointage = document.querySelector(_idPointage);
            this.grandeurCarre=20;//grandeur des carré des serpents
            this.grandeurGrille=15;//grandeur deu nb de carrés pour la grille complete

        }
        nouvellePartie(){
            this.affichagePointage(1);

            this.pomme= new Pomme;
            this.serpent= new Serpent;
            // this.*** : ***= une propriété

        }

        finPartie(){

        }

        affichagePointage(_lePointage){
            this.sortiePointage.innerHTML = _lePointage;
        }
    }


// le serpent
    class Serpent{
        constructor() {
            console.log("Création du serpent")
        }
    }

//la pomme
    class Pomme{
        constructor() {
            console.log("Création de la pomme")
        }
    }

    var unePartie = new Jeu("#jeu", "#pointage");//Création de l'objet Jeu avec la description de la class jeu
//les # c'est pcq cest des id dans le html
    var btnJouer = document.querySelector("#btnJouer");
    btnJouer.addEventListener("click", nouvellePartie);

    function nouvellePartie() {
        unePartie.nouvellePartie();//.nouvellePartie fait référence à la nouvelle partie en haut
    }
});

//une class c'est la déclaration d'un objet pas sa création