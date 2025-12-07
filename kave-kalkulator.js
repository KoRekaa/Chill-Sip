// Alapárak
const ALAPAR_LATTE = 990;
const ALAPAR_CAPPUCCINO = 950;
const ALAPAR_ESPRESSO = 600;
const ALAPAR_MOCHA = 1290;
const ALAPAR_JEGES_LATTE = 1190

document.addEventListener("DOMContentLoaded", function () {
  const gomb = document.getElementById("szamol-gomb");
  gomb.addEventListener("click", function () {
    //Ital típusa
    const italElem = document.getElementById("ital");
    const italErtek = italElem.value; // "latte", "cappuccino" "espresso" "..."

    // Méret 
    const meretElem = document.querySelector('input[name="meret"]:checked');
    const meretErtek = meretElem.value; // "kicsi", "közepes" "nagy"

    // Tej 
    const tejElem = document.querySelector('input[name="tej"]:checked');
    const tejErtek = tejElem.value; // "normál tej", "laktózmentes" "zab" "mandula"

    // Fogyasztás módja (helyben / elvitel)
    const fogyasztasElem = document.querySelector('input[name="fogyasztas"]:checked');
    const fogyasztasErtek = fogyasztasElem ? fogyasztasElem.value : "helyben";

    // Latte art
    const latteArtElem = document.getElementById("latteart");
    const latteArtErtek = latteArtElem ? latteArtElem.value : "nincs";

    // Extrák 
    const extraElemek = document.querySelectorAll('input[name="extra"]:checked');  
//ital számolás
    let vegosszeg = 0;
    if (italErtek === "latte") {
        vegosszeg = ALAPAR_LATTE;
    } 
    else if (italErtek === "cappuccino") {
        vegosszeg = ALAPAR_CAPPUCCINO;
    } 
    else if (italErtek === "espresso") {
        vegosszeg = ALAPAR_ESPRESSO;
    }
    else if (italErtek === "mocha") {
        vegosszeg = ALAPAR_MOCHA;
    }
    else if (italErtek === "jeges latte") {
        vegosszeg = ALAPAR_JEGES_LATTE
    }
//méret számolás
    if (meretErtek === "közepes") {
    vegosszeg = vegosszeg + 200;
    } 
    else if (meretErtek === "nagy") {
    vegosszeg = vegosszeg + 400;
    }
//tej számolás
    if (tejErtek === "laktózmentes tejjel") {
    vegosszeg = vegosszeg + 150;
    } 
    else if (tejErtek === "zab tejjel") {
    vegosszeg = vegosszeg + 200;
    }
    else if (tejErtek === "mandula tejjel") {
    vegosszeg = vegosszeg + 200;
    }
//extrák számolás
    for (let i = 0; i < extraElemek.length; i++) {
    const extra = extraElemek[i].value;

    if (extra === "extrashot") {
      vegosszeg += 300;
    } else if (extra === "szirup") {
      vegosszeg += 200;
    } else if (extra === "tejszinhab") {
      vegosszeg += 150;
    }
    else if (extra === "karamell") {
      vegosszeg += 250;
    }
    else if (extra === "csokolade szirup") {
      vegosszeg += 300;
    }
    else if (extra === "fahej szoras") {
      vegosszeg += 100;
    }
    else if (extra === "csokireszelek") {
      vegosszeg += 150;
    }
  }

  // Fogyasztás módja számolás
  if (fogyasztasErtek === "elvitel") {
    vegosszeg = vegosszeg + 150; 
  }

  // Latte art számolás
  if (latteArtErtek === "szivecske") {
    vegosszeg = vegosszeg + 100;
  } else if (latteArtErtek === "rosetta") {
    vegosszeg = vegosszeg + 150;
  } else if (latteArtErtek === "macska") {
    vegosszeg = vegosszeg + 200;
  }

  const leirasElem = document.getElementById("kave-leiras");
    const arElem = document.getElementById("kave-ar");

    let leirasSzoveg = "Kiválasztott italod: " + meretErtek + " " + italErtek + " " + tejErtek;

// Helyben / elvitel
    if (fogyasztasErtek === "elvitel") {
      leirasSzoveg += ", elvitelre kérve";
    } else {
      leirasSzoveg += ", helyben fogyasztva";
    }
    
    if (extraElemek.length > 0) {
      leirasSzoveg = leirasSzoveg + ", extrákkal";
    } else {
      leirasSzoveg = leirasSzoveg + ", extrák nélkül";
    }

    const diak = document.getElementById("diak");
    if (diak.checked) {
      vegosszeg = vegosszeg * 0.9; // 10% kedvezmény
    }

// Latte art leírás
    if (latteArtErtek === "szivecske") {
      leirasSzoveg += ", szívecske latte arttal.";
    } else if (latteArtErtek === "rosetta") {
      leirasSzoveg += ", rosetta latte arttal.";
    } else if (latteArtErtek === "macska") {
      leirasSzoveg += ", macskás latte arttal.";
    } else {
      leirasSzoveg += ", latte art nélkül.";
    }

    leirasElem.textContent = leirasSzoveg;
    arElem.textContent = "Végösszeg: " + vegosszeg + " Ft"; 
    });
});