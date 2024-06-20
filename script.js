/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! B
 Developed By: Kim Terrence Quines    S     2
               Guiellie Keit Lorenzo  I     A
               Rodary Tabasan         T
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
//==================Home Bamboo Background========================
window.onscroll = function() {Scroll()};

function Scroll(){
    if(document.documentElement.scrollTop > 10){
        document.getElementById("homebg").className = "homebghide";
        document.getElementById("homebg2").className = "homebg2hide";
        
        
    }else{
        document.getElementById("homebg").className = "homebg";
        document.getElementById("homebg2").className = "homebg2";
    }

    if(document.documentElement.scrollTop > 600){
        document.getElementById("products").className = "products" 
        
    }else{
        document.getElementById("products").className = "productsanim";
    }

}

//=======================home image slider========================
let homeimg = ['img/others/bbplant.jfif', 'img/others/prod1.jpg', 'img/loc/bamboocotage.jpg', 'img/loc/bamboocafe.jpg'];
let i = 0;

function HomeSlide(){
    document.getElementById("homeimg").style.backgroundImage = "url('" + homeimg[i]+ "')";
    document.homeslide.src = homeimg[i];
    if(i < homeimg.length - 1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("HomeSlide()", 1000);
}
HomeSlide();

/*=================================Product Img Slider=====================================*/
let prodSlideImg1 = ['img/prod/bbplant1.png','img/prod/bbfur1.png','img/prod/bbprod1.png'];
let prodSlideImg2 = ['img/prod/bbplant2.png','img/prod/bbfur2.png','img/prod/bbprod2.png'];
let i1 = 0;

function ProdSlide(){
    document.prodimg1.src = prodSlideImg1[i1];
    document.prodimg2.src = prodSlideImg2[i1];

    if(i1 < prodSlideImg1.length - 1){
        i1++;
    }else{
        i1 = 0;
    }
    setTimeout("ProdSlide()", 2000);
}
ProdSlide();

/*==============================Prod Pop Close Pop===================================*/
let prodpop = document.querySelector(".prodpop");

let prodpopimg = document.querySelector(".prodpopimg");
let prodtitle = document.querySelector(".prodtitle");
let prodsubtitle = document.querySelector(".prodsubtitle");
let prodrice = document.querySelector(".prodprice");

function Prodpop1(){
    prodpop.style.visibility = "visible";
    prodpopimg.src = "img/prod/bbplant1.png";
    prodtitle.innerHTML = "Bamboo Plant"
    prodrice.innerHTML = "PHP  00.00"
}

function Prodpop2(){
    prodpop.style.visibility = "visible";
    prodpopimg.src = "img/prod/bbplant2.png";
    prodtitle.innerHTML = "Bamboo Plant"
    prodrice.innerHTML = "PHP  00.00"
}

function Prodpop3(){
    prodpop.style.visibility = "visible";
    prodpopimg.src = "img/prod/bbplant3.png";
    prodtitle.innerHTML = "Bamboo Plant"
    prodrice.innerHTML = "PHP  00.00"
}

function Prodpop4(){
    prodpop.style.visibility = "visible";
    prodpopimg.src = "img/prod/bbplant5.png";
    prodtitle.innerHTML = "Bamboo Plant"
    prodrice.innerHTML = "PHP  00.00"
}

function Prodpop5(){
    prodpop.style.visibility = "visible";
    prodpopimg.src = "img/prod/bbprod1.png";
    prodtitle.innerHTML = "Bamboo Plant"
    prodrice.innerHTML = "PHP  00.00"
}

function Prodpop6(){
    prodpop.style.visibility = "visible";
    prodpopimg.src = "img/prod/bbprod2.png";
    prodtitle.innerHTML = "Bamboo Plant"
    prodrice.innerHTML = "PHP  00.00"
}

function Prodpop7(){
    prodpop.style.visibility = "visible";
    prodpopimg.src = "img/prod/bbprod3.png";
    prodtitle.innerHTML = "Bamboo Plant"
    prodrice.innerHTML = "PHP  00.00"
}

function Prodpop8(){
    prodpop.style.visibility = "visible";
    prodpopimg.src = "img/prod/bbprod4.png";
    prodtitle.innerHTML = "Bamboo Plant"
    prodrice.innerHTML = "PHP  00.00"
}

function Prodpop9(){
    prodpop.style.visibility = "visible";
    prodpopimg.src = "img/prod/bbfur1.png";
    prodtitle.innerHTML = "Bamboo Plant"
    prodrice.innerHTML = "PHP  00.00"
}

function Prodpop10(){
    prodpop.style.visibility = "visible";
    prodpopimg.src = "img/prod/bbfur2.png";
    prodtitle.innerHTML = "Bamboo Plant"
    prodrice.innerHTML = "PHP  00.00"
}

function Prodpop11(){
    prodpop.style.visibility = "visible";
    prodpopimg.src = "img/prod/bbfur3.png";
    prodtitle.innerHTML = "Bamboo Plant"
    prodrice.innerHTML = "PHP  00.00"
}

function Prodpop12(){
    prodpop.style.visibility = "visible";
    prodpopimg.src = "img/prod/bbfur4.png";
    prodtitle.innerHTML = "Bamboo Plant"
    prodrice.innerHTML = "PHP  00.00"
}


let closeprodpop = document.querySelector("closeprodpop");
function Prodclose(){

    prodpop.style.visibility = "hidden";
}


