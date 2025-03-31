import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adjectif = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let domain = ['.com', '.net', '.us', '.io']
  //para ver el resultado en la pagina sin tener que abrir la consola
  let myDomainList = document.getElementById("generadorDeDominios");

 for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjectif.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          let generadorDeDominios = pronoun[i] + adjectif[j]+ noun[k]+ domain[l];
          	//crear un <li> Element cada vez que hace el bucle
          let item = document.createElement ("li");
          item.textContent = generadorDeDominios;
          myDomainList.appendChild(item);
          console.log(generadorDeDominios);
         
        }
        
      }
      
    } 
    console.log(generadorDeDominios);
 }
 
 console.log("Hello Rigo from the console!");

}
