"use strict";

// HÃ¤mta in meny-knapparna
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");

//eventlyssnare
openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

//Toggla fram navigeringsmenyn
function toggleMenu() {
    let navMenuEl = document.getElementById("nav-menu");

    //hÃ¤mtar in css fÃ¶r menyn
    let style = window.getComputedStyle(navMenuEl);

    //koll om navigering Ã¤r synlig eller ej, Ã¤ndrar display block/none
    if(style.display === "none") {
        navMenuEl.style.display = "block";
        this.setAttribute("aria-expanded", "true"); //Ã„ndrar aria till true nÃ¤r mobilmenyn Ã¤r utfÃ¤lld 
    } else {
        navMenuEl.style.display = "none";
        this.setAttribute("aria-expanded", "false"); //Ã„ndrar aria till true nÃ¤r mobilmenyn Ã¤r infÃ¤lld
    }
}


//FÃ¶r atiklarna som finns pÃ¥ "om"
let coll = document.getElementsByClassName("collapsible"); 
let i; 

for (i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active"); 
        let content = this.nextElementSibling; 
        if(content.style.display === "block") {
            content.style.display = "none";
            this.setAttribute("aria-expanded", "false"); //Ã„ndrar aria till false nÃ¤r knapparna Ã¤r ihopfÃ¤llda. 
        } else{
            content.style.display = "block"; 
            this.setAttribute("aria-expanded", "true"); //Ã„ndrar aria till true nÃ¤r knapparna Ã¤r utfÃ¤llda. 
        }
    }); 
}

//FormulÃ¤r ----------------------------------------->

let yes = document.getElementById("ja");
let no = document.getElementById("nej"); 

yes.addEventListener("click", function(){
    
    let travelBack = document.getElementById("extra"); 
    
    if(travelBack.style.display === "none"){
        travelBack.style.display = "block"; 
    } else{
        travelBack.style.display = "block"; 
    }
}); 



no.addEventListener("click", function(){
    
    let travelBack = document.getElementById("extra"); 
    if (travelBack.style.display = "block"){
        travelBack.style.display = "none"; 
    }
}); 

//FormulÃ¤ret fÃ¶r Ã¥terkommande resor

let travelBtn = document.getElementById("boka_Ã¥terkommande_resa"); 

travelBtn.addEventListener("click", function(){
    let travelAgain = document.getElementById("Ã¥terkommande");
    let travel = document.getElementById("travel-booked"); 
    let titleTravelAgain = document.getElementById("booked2"); 
    let titleTravel = document.getElementById("booked");
   
    if(travelAgain.style.display === "none"){
        travelAgain.style.display = "block"
        titleTravelAgain.style.display = "block"
        travel.style.display = "none"
        titleTravel.style.display = "none"
    }else{
        travelAgain.style.display = "block"
        titleTravelAgain.style.display = "block"
        travel.style.display = "none"
        titleTravel.style.display = "none"
    }
}); 

let travelResetBtn = document.getElementById("boka_resa"); 

travelResetBtn.addEventListener("click", function(){
    let travelAgain = document.getElementById("Ã¥terkommande");
    let travel = document.getElementById("travel-booked"); 
    let titleTravelAgain = document.getElementById("booked2"); 
    let titleTravel = document.getElementById("booked");

    if(travelAgain.style.display === "none"){
        
    }else{
        titleTravelAgain.style.display = "none"
        titleTravel.style.display = "block"
        travelAgain.style.display = "none"
        travel.style.display = "block"
    }
}); 



//Funktion som gÃ¶r det mÃ¶jligt att Ã¤ndra mobil/surfplatte formulÃ¤ren. 
let mobileBtn = document.getElementById("boka_Ã¥terkommande_resa_mobil"); 
let oneForm = document.getElementById("mobile_form"); 
let btn = document.getElementById("boka_resa_mobil"); 
let severalForm = document.getElementById("form-mobile-Ã¥terkommande"); 
let form = document.getElementById("form-mobile"); 

mobileBtn.addEventListener("click", function(){
    
    if(screen.width <= 900){
        oneForm.style.display = "none";
        severalForm.style.display="block";
    } 
}); 

btn.addEventListener("click", function(){
    if(screen.width <= 900){
        severalForm.style.display = "none";
        oneForm.style.display ="block"; 

    }
}); 







