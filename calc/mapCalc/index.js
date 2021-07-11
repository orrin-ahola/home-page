
function calcMap() {
    let sbp = document.getElementById("sbp_list").value; 
    let dbp = document.getElementById("dbp_list").value;
    let map = Math.round((( 2 * Number(dbp) ) + Number(sbp) ) / 3);
    return map;
}

function showMap() {
    document.getElementById("map").innerText = "MAP = " + calcMap();
    document.getElementById("target-btn").style.display = "block";
    document.getElementById("target").style.display = "none";
}

function calcTarget() {
    let map = calcMap();
    let lower_bound = Math.round(map * 0.7);
    let upper_bound = Math.round(map * 0.75);
    document.getElementById("target").style.display = "block";
    document.getElementById("target").innerText = lower_bound + " - " + upper_bound; 
}

window.addEventListener("DOMContentLoaded", function (){

    let sbp = document.getElementById('sbp_list');
    let dbp = document.getElementById('dbp_list');


    for (i=0; i<301; i++) {
        let sbpOption = document.createElement("option");
        let dbpOption = document.createElement("option");

        sbpOption.text = 300 - i;
        sbpOption.value = 300 - i;
        sbpOption.selected = "";
        sbp.options[i] = sbpOption;

        dbpOption.text = 300 - i;
        dbpOption.value = 300 - i;
        dbpOption.selected = "";
        dbp.options[i] = dbpOption;

        i === 180 ? sbpOption.selected = "selected" : "";
        i === 220 ? dbpOption.selected = "selected" : "";
    }

});
