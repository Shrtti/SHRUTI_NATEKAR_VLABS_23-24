function calc_factorial() {
    let n = document.getElementById("num").valueAsNumber;

    factorial = 1;
    
    for(i=1;i<n+1;i++)
    {
        console.log(i);
        factorial = factorial*i;
    }

    console.log(factorial)

    document.getElementById("facto").innerText = "Factorial is: " + factorial;
}
