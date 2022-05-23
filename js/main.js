let punkte1 = 0
let punkte2 = 0
let AnzahlWuerfe1 = 0
let AnzahlWuerfe2 = 0
let wurf
let wurf1, wurf2


function wuerfeln1() {
    wurf1 = Math.round(Math.random() * 5) + 1
    wurf2 = Math.round(Math.random() * 5) + 1
    wurf = wurf1 + wurf2
    AnzahlWuerfe1 = AnzahlWuerfe1 + 1
    if (7 > wurf || wurf > 7) {
        punkte1 = punkte1 + wurf
        document.getElementById("Würfel1").innerHTML = "Würfel 1:  " + wurf1
        document.getElementById("Würfel2").innerHTML = "Würfel 2:  " + wurf2
        document.getElementById("Summe1").innerHTML = "Summe Spieler 1:  " + punkte1
        document.getElementById("Anzahl1").innerHTML = "Anzahl Würfe Spieler 1:  " + AnzahlWuerfe1
        document.getElementById("btnPlaceholder1").disabled = false
    } else {
        punkte1 = punkte1 + wurf - 14
        document.getElementById("Würfel1").innerHTML = "Würfel 1:" + wurf1
        document.getElementById("Würfel2").innerHTML = "Würfel 2:" + wurf2
        document.getElementById("Summe1").innerHTML = "Summe Spieler 1:" + punkte1
        document.getElementById("Anzahl1").innerHTML = "Anzahl Würfe Spiele 1:" + AnzahlWuerfe1
        document.getElementById("btnPlaceholder1").disabled = true
    }
}

function wuerfeln2() {
    wurf1 = Math.round(Math.random() * 5) + 1
    wurf2 = Math.round(Math.random() * 5) + 1
    wurf = wurf1 + wurf2
    AnzahlWuerfe2 = AnzahlWuerfe2 + 1

    if (7 > wurf || wurf > 7) {
        punkte2 = punkte2 + wurf
        document.getElementById("Würfel3").innerHTML = "Würfel 1 (Spieler 2):  " + wurf1
        document.getElementById("Würfel4").innerHTML = "Würfel 2 (Spieler 2):  " + wurf2
        document.getElementById("Summe2").innerHTML = "Summe Spieler 2:  " + punkte2
        document.getElementById("Anzahl2").innerHTML = "Anzahl Würfe Spieler 2:  " + AnzahlWuerfe2
        document.getElementById("btnPlaceholder2").disabled = false
    } else {
        punkte2 = punkte2 + wurf - 14
        document.getElementById("Würfel3").innerHTML = "Würfel 1 (Spieler 2):" + wurf1
        document.getElementById("Würfel4").innerHTML = "Würfel 2 (Spieler 2):" + wurf2
        document.getElementById("Summe2").innerHTML = "Summe Spieler 2:" + punkte2
        document.getElementById("Anzahl2").innerHTML = "Anzahl Würfe Spiele 2:" + AnzahlWuerfe2
        document.getElementById("btnPlaceholder2").disabled = true
        auswerten()
    }
    if (AnzahlWuerfe1 === AnzahlWuerfe2){
        document.getElementById("btnPlaceholder2").disabled = true
        auswerten()
    }
}
function ende() {
    document.getElementById("btnPlaceholder1").disabled = true

}
function auswerten() {
    if (punkte1 > punkte2){
        document.getElementById("auswerten").innerHTML = "Spieler 1 hat gewonnen"
    }else if (punkte1 === punkte2){
        document.getElementById("auswerten").innerHTML = "Unentschieden! Beide Spieler haben die gleiche Punktzahl"
    }else {
        document.getElementById("auswerten").innerHTML = "Spieler 2 hat gewonnen"
    }

}

function neu() {
    location.reload()
}

function computer() {
    while (i < )

    
}