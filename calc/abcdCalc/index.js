

function calcABCD() {
let abcd
abcd =  Number(document.querySelector('input[name="age"]:checked').value) +
        Number(document.querySelector('input[name="bp"]:checked').value) +
        Number(document.querySelector('input[name="clinical"]:checked').value) +   
        Number(document.querySelector('input[name="duration"]:checked').value) +
        Number(document.querySelector('input[name="dm"]:checked').value) 

document.getElementById('abcd').innerText = "ABCD2 = " + abcd;
}