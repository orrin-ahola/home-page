

function calcChadVasc() {
    let chadvasc;
    let risk;

    chadvasc =  Number(document.querySelector('input[name="age"]:checked').value) +
            Number(document.querySelector('input[name="sex"]:checked').value) +
            Number(document.querySelector('input[name="chf"]:checked').value) +   
            Number(document.querySelector('input[name="htn"]:checked').value) +
            Number(document.querySelector('input[name="cva"]:checked').value) +
            Number(document.querySelector('input[name="vascdz"]:checked').value) +
            Number(document.querySelector('input[name="dm"]:checked').value) 

    


    if (chadvasc == 0) {
        risk = "Do not anticoagulate"
    } else {
        if (chadvasc == 1) {
            risk = "Low-mod risk - consider antiplatelet or AC rx"
        } else {
            risk = "Mod-high risk - start AC rx"
        }
    }

    document.getElementById('test').innerText = "Chad Vasc = " + chadvasc;
    document.getElementById('risk').innerText = risk;

    }