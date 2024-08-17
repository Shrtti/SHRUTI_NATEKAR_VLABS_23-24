function simple_interest() {
    let pr = document.getElementById("p").valueAsNumber;
    let rate = document.getElementById("r").valueAsNumber;
    let time = document.getElementById("t").valueAsNumber;

    console.log(pr);
    console.log(rate);
    console.log(time);

    let si = (pr*rate*time)/100;
    let amt = pr + si;

    console.log("Simple interest is: "+si);
    document.getElementById("interest").innerText = "Simple interest is: ₹" + si;
    document.getElementById("amount").innerText = "Total Amount is: ₹" + amt;
}