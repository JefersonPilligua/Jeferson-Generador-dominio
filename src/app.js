/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//LE CAMBIE EL FONDO A NEGRO PORQUE ME MOLESTA UN POCO EL BLANCO DE LA PAGINA XD ALUMBRA MUCHO

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domainHacks = [".com", ".es", ".net", ".us", ".io"];

  let domains = [];

  for (let i of pronoun) {
    for (let x of adj) {
      for (let y of noun) {
        for (let hacks of domainHacks) {
          domains.push(`${i}${x}${y}${hacks}`);
        }
      }
    }
  }

  console.log(domains);
};
