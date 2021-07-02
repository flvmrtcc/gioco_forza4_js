

function creaTabellaGioco() {
    let strTab = "<table>";
    let numCella = 0;
    for (let r = 0; r < 6; r++) {
        strTab += "<tr>";
        for (let c = 0; c < 7; c++) {
            strTab += `<td id="cella${numCella}"></td>`;
            numCella++;
        }
        strTab += "</tr>";
    }
    strTab += "</table>";
    document.getElementById("contenitoreGioco").innerHTML += strTab;
    // document.getElementsByTagName("body")[0].innerHTML += strTab;
}

