
function Forza4() {
    let matrice = [             // 0 cella vuota, 1 giocatore1, 2 giocatore2
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 2, 0, 0, 0]
    ];
    let numeroRighe = 6;
    let numeroColonne = 7;
    let utenteCorrente = 1;


    this.creaTabellaGioco = function () {
        let strTab = "<table>";
        let numCella = 0;
        for (let r = 0; r < numeroRighe; r++) {
            strTab += "<tr>";
            for (let c = 0; c < numeroColonne; c++) {
                strTab += `<td id="cella_${numCella}"></td>`;
                numCella++;
            }
            strTab += "</tr>";
        }
        strTab += "</table>";
        document.getElementById("contenitoreGioco").innerHTML += "<div id='schermoInfoPartita'><h2><br></h2></div>"
        document.getElementById("contenitoreGioco").innerHTML += `<div id="divGioco">${strTab}</div>`;
        assegnaOnclickCelle();
    }

    let stringaGiocatoreCorrente = function () {
        document.getElementById("schermoInfoPartita").getElementsByTagName("h2")[0].innerHTML = `Turno del giocatore ${utenteCorrente}`;
    }

    let controllaCellaCliccata = function (cellaCliccata) {
        // console.log(cellaCliccata.id);
        let str = cellaCliccata.id;
        // console.log(str.split("_").pop());      // rimuove "cella_" e tiene solo il numero della cella
        str = str.substring('cella_'.length);      // rimuove "cella_" e tiene solo il numero della cella
        let numeroCellaCliccata = parseInt(str);
        let rigaCellaCliccata = parseInt(numeroCellaCliccata / numeroColonne);
        let colonnaCellaCliccata = numeroCellaCliccata % numeroColonne;
        console.log(`Colonna= ${colonnaCellaCliccata}, Riga= ${rigaCellaCliccata}`);
        matrice[rigaCellaCliccata][colonnaCellaCliccata] = utenteCorrente;
        mostraCella(numeroCellaCliccata, rigaCellaCliccata, colonnaCellaCliccata);
        utenteSuccessivo();
    }

    let utenteSuccessivo = function () {
        if (utenteCorrente == 1)
            utenteCorrente = 2;
        else
            utenteCorrente = 1;
        stringaGiocatoreCorrente();
    }

    let assegnaOnclickCelle = function () {
        let arrayCelle = document.getElementsByTagName("td");
        for (let numCella = 0; numCella < arrayCelle.length; numCella++) {
            arrayCelle[numCella].onclick = function () {
                controllaCellaCliccata(this);
            }
        }
    }

    this.mostraCelle = function () {
        let posCorrenteTabella = 0;
        for (let r = 0; r < numeroRighe; r++) {
            for (let c = 0; c < numeroColonne; c++) {
                mostraCella(posCorrenteTabella, r, c);
                posCorrenteTabella++;
            }
        }
    }

    let mostraCella = function (posCorrenteTabella, riga, colonna) {
        let cella = document.getElementsByTagName("td")[posCorrenteTabella];
        if (matrice[riga][colonna] == 1) {
            cella.style = "background-color: red;";
        }
        else if (matrice[riga][colonna] == 2) {
            cella.style = "background-color: yellow;";
        }
        else {
            cella.style = "background-color: gray;";
        }
    }


}



