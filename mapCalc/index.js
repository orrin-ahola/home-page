
function calcMap() {
    let sbp = document.getElementById("sbp").value; 
    let dbp = document.getElementById("dbp").value;
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