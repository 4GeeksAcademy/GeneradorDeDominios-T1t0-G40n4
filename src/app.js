import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let dom = ['.com', '.net', '.us', '.io']


window.onload = function() {
  //write your code here
 for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dom.length; l++) {
          let generadorDeDominios = pronoun[i] + adj[j]+ noun[k]+ dom[l]
          console.log(pronoun[i] + adj[j]+ noun[k]+ dom[l] )
         
        }
        
      }
      
    }
  
 }
 
 console.log("Hello Rigo from the console!");

}

