function APsum() {
    apser = document.getElementById("AP").value;
    splitser = apser.split(',');
    const a = splitser[0];
    const d = splitser[1]-splitser[0];
    const n = document.getElementById('num').valueAsNumber;
    
    const sum = (n / 2) * (2 * a + (n - 1) * d);
    var apres = document.getElementById('app');
    apres.innerHTML = "The sum of given AP till " + n + " terms is: " + sum;
}

function GPsum() {
    gpser = document.getElementById("GP").value;
    splitser = gpser.split(',');
    const a = splitser[0];
    const r = splitser[1]/splitser[0];
    const n = document.getElementById('num1').valueAsNumber;
    
    let sum1;
    
    if (r === 1) {
        sum1 = n * a;
    } else {
        sum1 = a * (Math.pow(r, n)-1) / (r - 1);
    }
    var gpres = document.getElementById("gpp");
    gpres.innerHTML = "The sum of given GP till " + n + " terms is: " + sum1;
}