/* Een test of javascript goed is gelinkt naar het html bestand */
console.log("Welkom, bij jouw persoonlijke Monster!");

/* Alle variebele op een rijtje */
var speelRuimte = document.querySelector("#speelruimte");
// Emoties (status van het monster)
var emotieMonster = "blij";
// Interactie veranderingen
var praatTekst = document.querySelector("#praat");
var tipTekst = document.querySelector("#tip")
var afbMonster = document.querySelector("#afbeelding-monster");
// Alle knoppen
var voerenKnop = document.querySelector("#voeren-knop");
var liefdeKnop = document.querySelector("#liefde-knop");
var vliegenKnop = document.querySelector("#vliegen-knop");
var slapenKnop = document.querySelector("#slapen-knop");
// Audio
var gegromAudio = document.querySelector("#gegrom");
// Alles van random uitvoering
var meteoorAfb = document.querySelector("#meteoor");
var ufoAfb = document.querySelector("#ufo");

var randomKnop = document.querySelector("#random-knop");

var randomUitvoeringen = ["meteoor", "ufo"]

/* Alle emoties van het monster op een rijtje */
function monsterBlij() {
  afbMonster.src = "images/monster_blij.png";
  emotieMonster = "blij";
}

function monsterBoos() {
  afbMonster.src = "images/monster_boos.png";
  emotieMonster = "boos";
}

function monsterVliegt() {
  afbMonster.src = "images/monster_vliegt.png";
  emotieMonster = "vliegen";
  afbMonster.classList.add("vlieg-animatie");
}

function monsterHongerig() {
  afbMonster.src = "images/monster_hongerig.png";
  praatTekst.textContent = "Ik heb honger gekregen door het vliegen..";
  tipTekst.textContent = "";
  emotieMonster = "hongerig";
  afbMonster.classList.remove("vlieg-animatie");
}

function monsterMoe() {
  afbMonster.src = "images/monster_moe.png";
  emotieMonster = "moe";
}

function monsterSlaapt() {
  afbMonster.src = "images/monster_slaapt.png";
  emotieMonster = "slaapt";
  speelRuimte.classList.add("licht-uit");
}

function monsterWakker() {
  monsterBlij();
  praatTekst.textContent = "Dat was lekker slapen!";
  tipTekst.textContent = "";
  speelRuimte.classList.remove("licht-uit");
}

function monsterMeteoor() {
  emotieMonster = "meteoor";
  meteoorAfb.classList.add("meteoor-animatie");
}

function monsterDood() {
  afbMonster.src = "images/monster_dood.png";
  praatTekst.textContent = "GAME OVER!";
  tipTekst.textContent = "Jouw monster is dood... Refresh de pagina om opnieuw te starten.";
  emotieMonster = "dood";
  meteoorAfb.classList.remove("meteoor-animatie");
}

function monsterUfo() {
  emotieMonster = "ufo";
  ufoAfb.classList.add("ufo-animatie");
}

function monsterOntvoerd() {
  (afbMonster).remove();
  praatTekst.textContent = "GAME OVER!";
  tipTekst.textContent = "Jouw monster is ontvoerd... Refresh de pagina om opnieuw te starten.";
  emotieMonster = "ontvoerd";
}

/* Als je op het monster klikt dan sla je het monster */
function slaan() {
  // blij
  if (emotieMonster == "blij") {
    monsterBoos();
    praatTekst.textContent = "Waarom sla je me?";
    tipTekst.textContent = "";
    gegromAudio.play();
  }
  // boos
  else if (emotieMonster == "boos") {
    praatTekst.textContent = "Je slaat me weer, wat is er mis met jou!?!?";
    tipTekst.textContent = "Tip: Geef jouw monster liefde";
  }
  // hongerig
  else if (emotieMonster == "hongerig") {
    praatTekst.textContent = "Als ik honger heb boeit mij niks meer alleen eten nog..";
    tipTekst.textContent = "Tip: Vergeet jouw monster niet te voeren";
  }
  // moe
  else if (emotieMonster == "moe") {
    praatTekst.textContent = "Zo moe, dat ik het niet eens meer voel..";
    tipTekst.textContent = "Tip: Misschien moet het licht uit zodat jouw monster kan slapen";
  }

}
// functie uitvoeren
afbMonster.addEventListener("dblclick", slaan);

/* Als je op de liefde button klikt dan maak je het weer goed met het monster */
function geefLiefde() {
  // boos
  if (emotieMonster == "boos") {
    monsterBlij();
    praatTekst.textContent = "Oke Oke, het is weer goed tussen ons";
    tipTekst.textContent = "";
    gegromAudio.pause();
  }
  // blij
  else if (emotieMonster == "blij") {
    praatTekst.textContent = "Aw, wat lief van je!";
    tipTekst.textContent = "";
  }
  // hongerig
  else if (emotieMonster == "hongerig") {
    praatTekst.textContent = "Voor je het weet eet ik jou op!!";
    tipTekst.textContent = "Tip: Vergeet jouw monster niet te voeren";
  }
  // moe
  else if (emotieMonster == "moe") {
    praatTekst.textContent = "Jouw liefde helpt niet... ik ben gewoon te moe..";
    tipTekst.textContent = "Tip: Misschien moet het licht uit zodat jouw monster kan slapen";
  }
}
// functie uitvoeren
liefdeKnop.addEventListener("click", geefLiefde);

/* Als je op de vlieg button drukt gaat het monster vliegen maar krijgt die erna wel honger */
function vliegen() {
  // blij
  if (emotieMonster == "blij") {
    monsterVliegt();
    praatTekst.textContent = "Woei, ik ben lekker aan het vliegen!";
    tipTekst.textContent = "";
    setTimeout(monsterHongerig, 5000);
  }
  // boos
  else if (emotieMonster == "boos") {
    praatTekst.textContent = "Ik ben nog steeds boos op jou!";
    tipTekst.textContent = "Tip: Geef jouw monster liefde";
  }
  // hongerig
  else if (emotieMonster == "hongerig") {
    praatTekst.textContent = "Ik heb teveel honger, ik kan niet vliegen..";
    tipTekst.textContent = "Tip: Vergeet jouw monster niet te voeren";
  }
  // moe
  else if (emotieMonster == "moe") {
    praatTekst.textContent = "Ik ben kapot vliegen lukt me niet..";
    tipTekst.textContent = "Tip: Misschien moet het licht uit zodat jouw monster kan slapen";
  }
}
// functie uitvoeren
vliegenKnop.addEventListener("click", vliegen);

/* Als je op de voer button klikt voer je het monster */
function voeren() {
  // hongerig
  if (emotieMonster == "hongerig") {
    monsterBlij();
    praatTekst.textContent = "Mmmm.. dat was heerlijkkkkkkkkkk!";
    tipTekst.textContent = "";
  }
  // blij
  else if (emotieMonster == "blij") {
    praatTekst.textContent = "Ik zit al vol!";
    tipTekst.textContent = "";
  }
  // boos
  else if (emotieMonster == "boos") {
    praatTekst.textContent = "Met eten maak je niet alles goed";
    tipTekst.textContent = "Tip: Geef jouw monster liefde";
  }
  // moe
  else if (emotieMonster == "moe") {
    praatTekst.textContent = "Nee, ik wil niet eten. Ik ben moe!";
    tipTekst.textContent = "Tip: Misschien moet het licht uit zodat jouw monster kan slapen";
  }
}
// functie uitvoeren
voerenKnop.addEventListener("click", voeren);

/* Na een bepaalde tijd wordt het monster moe */
function moe() {
  // blij
  if (emotieMonster == "blij") {
    monsterMoe();
    praatTekst.textContent = "Ik ben moe...";
    tipTekst.textContent = "";
  }
}
// functie uitvoeren
setInterval(moe, 5000);

/* Als je op de licht knop klikt gaat het monster slapen */
function slapen() {
  // moe
  if (emotieMonster == "moe") {
    monsterSlaapt();
    praatTekst.textContent = "ZZZZZzzzzz....";
    tipTekst.textContent = "";
    setTimeout(monsterWakker, 5000);
  }
  // blij
  else if (emotieMonster == "blij") {
    praatTekst.textContent = "Ik ben niet moe..";
    tipTekst.textContent = "";
  }
  // boos
  else if (emotieMonster == "boos") {
    praatTekst.textContent = "Dit lost niks op!";
    tipTekst.textContent = "Tip: Geef jouw monster liefde";
  }
  // hongerig
  else if (emotieMonster == "hongerig") {
    praatTekst.textContent = "Ik heb honger en ben niet moe!";
    tipTekst.textContent = "Tip: Vergeet jouw monster niet te voeren";
  }
}
// functie uitvoeren
slapenKnop.addEventListener("click", slapen);

/* Dit is een random functie die zelf kiest voor een meteoor inslag of ontvoering */
function random() {
  if (emotieMonster == "blij") {
    var randomKeuze = Math.random() * 2;
    randomKeuze = Math.floor(randomKeuze);
    var randomWoord = randomUitvoeringen[randomKeuze];
    console.log(randomWoord);
    //meteoor functie
    if (randomWoord == "meteoor") {
      monsterMeteoor();
      setTimeout(monsterDood, 2500);
    }
    //ufo functie
    else if (randomWoord == "ufo") {
      monsterUfo();
      setTimeout(monsterOntvoerd, 5000);
    }
  }
}
// functie uitvoeren
randomKnop.addEventListener("click", random);
