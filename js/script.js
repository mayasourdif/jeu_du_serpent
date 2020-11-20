
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
            this.finPartie();
            this.affichagePointage(1);

            this.pomme= new Pomme(this);//passe a ma pomme le jeu en référence
            this.serpent= new Serpent(this);
            // this.*** : ***= une propriété

        }

        finPartie(){
            if(this.pomme !==undefined){
                this.pomme.supprimePomme();
                this.pomme = undefined;
            }


        }

        affichagePointage(_lePointage){
            this.sortiePointage.innerHTML = _lePointage;
        }
    }


// le serpent
    class Serpent{
        constructor(_leJeu) {
            console.log("Création du serpent")
            this.leJeu=_leJeu;

            this.currentX=-1;
            this.currentY=0;
            this.nextMoveX = 1;
            this.nextMoveY = 0;

            this.serpentLongueur =1;
            this.tblCarreSerpent =[];

            this.vitesse =250;
            this.timing = setInterval(this.controleSerpent.bind(this), this.vitesse);
            //bind = voir explication en dessous
            document.addEventListener("keydown", this.verifieTouche.bind(this));
            //bind(this), c'est pour que dans deplacement this équicaut au this de bind donc au lieu d'etre document le this de deplacement va etre serpent
        }
        verifieTouche(_evt){
            var evt = _evt;
            console.log(evt.keyCode);
            this.deplacement(evt.keyCode);
            //keyCode = le code (num) de la touche j'ai enfoncé
        }

        deplacement(dirCode){
            switch(dirCode){
                case 37://37 = le keyCode pour la fleche gauche
                    this.nextMoveX=-1;
                    this.nextMoveY=0;
                    break;
                case 38://38 = le keyCode pour la fleche haut
                    this.nextMoveX=0;
                    this.nextMoveY=-1;
                    break;
                case 39://39 = le keyCode pour la fleche droite
                    this.nextMoveX=1;
                    this.nextMoveY=0;
                    break;
                case 40://40 = le keyCode pour la fleche bas
                    this.nextMoveX=0;
                    this.nextMoveY=1;
                    break;
            }
            //console.log(this.nextMoveY);
        }

        controleSerpent(){
            var nextX=this.currentX+this.nextMoveX;
            var nextY=this.currentY+this.nextMoveY;

            this.dessineCarre(nextX, nextY);
            this.currentX=nextX;
            this.currentY=nextY;
        }

        dessineCarre(x,y){

        }

        supprimeSerpent(){

        }

    }

//la pomme
    class Pomme{
        constructor(_leJeu) { //le parametre va etre supprimé à la finde la fonction
            console.log("Création de la pomme")

            this.leJeu=_leJeu;
            this.pomme =[]; //tableau vide
            this.ajoutePomme();
        }

        //2 méthodes concernant la pomme
        ajoutePomme(){
           var posX = Math.floor(Math.random()*this.leJeu.grandeurGrille);
           var posY = Math.floor(Math.random()*this.leJeu.grandeurGrille);
           //MAth.floor = pour avoir un chiffre rond
           //Math.random * ... = pour avoir un chiffre dans la grandeur de la grille
            this.pomme = [this.leJeu.s.rect(posX *this.leJeu.grandeurCarre, posY*this.leJeu.grandeurCarre, this.leJeu.grandeurCarre, this.leJeu.grandeurCarre).attr({fill:'red'}), posX, posY];
            //rect = methode pour dessiner un rectangle, a l'interieur des parantheses = dimmensions
            //attr = attribut, remplir en rouge
            //= création d'un rectangle dans le tableau pomme

        }
        supprimePomme(){
            this.pomme[0].remove(); //methode remove pour enlever le rectangle rouge crééer dans le tableau pomme

        }
    }



    //////////////////////////////////////////////

    var unePartie = new Jeu("#jeu", "#pointage");//Création de l'objet Jeu avec la description de la class jeu
//les # c'est pcq cest des id dans le html
    var btnJouer = document.querySelector("#btnJouer");
    btnJouer.addEventListener("click", nouvellePartie);

    function nouvellePartie() {
        unePartie.nouvellePartie();//.nouvellePartie fait référence à la nouvelle partie en haut
    }
});

//une class c'est la déclaration d'un objet pas sa création