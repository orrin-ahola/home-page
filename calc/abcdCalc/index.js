

function calcABCD() {
    let abcd;
    let risk;

    abcd =  Number(document.querySelector('input[name="age"]:checked').value) +
            Number(document.querySelector('input[name="bp"]:checked').value) +
            Number(document.querySelector('input[name="clinical"]:checked').value) +   
            Number(document.querySelector('input[name="duration"]:checked').value) +
            Number(document.querySelector('input[name="dm"]:checked').value) 

    if (abcd < 4) {
        risk = " (low)"
    } else {
        if (abcd > 5) {
            risk = " (**high**)"
        } else {
            risk = " (**medium**)"
        }
    }

    document.getElementById('abcd').innerText = "ABCD2 = " + abcd + risk;
}