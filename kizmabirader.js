"use strict";

//let steps = [
//  document.querySelector(".step0").textContent,
//  document.querySelector(".step1").textContent,
//  document.querySelector(".step2").textContent,
//  document.querySelector(".step3").textContent,
//  document.querySelector(".step4").textContent,
//  document.querySelector(".step5").textContent,
//  document.querySelector(".step6").textContent,
//  document.querySelector(".step7").textContent,
//  document.querySelector(".step8").textContent,
//  document.querySelector(".step9").textContent,
//];

//let cantugNumber = steps.indexOf(document.querySelector(".step0").textContent);

//var d = document.getElementsByClassName("step0");
//d.style.position = "absolute";
//d.style.left = 50;
//d.style.top = 50;

const player = prompt("Please enter your name!");
document.querySelector(".step0").textContent = player;

let playerNumber = 0;

let randomNumber = function () {
  return Math.trunc(Math.random() * 4) + 1;
};

document.querySelector(".btn").addEventListener("click", function () {
  let numberAdd = randomNumber();
  playerNumber = playerNumber + numberAdd;
  document.querySelector(".zar").textContent = `zar ${numberAdd} geldi!`;
  document.querySelector(`.step${playerNumber - numberAdd}`).textContent =
    playerNumber - numberAdd;
  if (playerNumber >= 10) {
    playerNumber = 0;
    document.querySelector(".step0").textContent = player;
  } else {
    document.querySelector(`.step${playerNumber}`).textContent = player;
  }
});

//if (cantugNumber > 10) {
//  cantugNumber = 0;
//  document.querySelector(".step9").textContent = 10;
//  document.querySelector(".step0").textContent = "Cantuğ";
