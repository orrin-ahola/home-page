

function calcHEART() {
    let heart;

    heart =  Number(document.querySelector('input[name="hx"]:checked').value) +
            Number(document.querySelector('input[name="ekg"]:checked').value) +
            Number(document.querySelector('input[name="age"]:checked').value) +   
            Number(document.querySelector('input[name="rf"]:checked').value) +
            Number(document.querySelector('input[name="trop"]:checked').value) 

    document.getElementById('heart').innerText = "HEART score = " + heart;
}