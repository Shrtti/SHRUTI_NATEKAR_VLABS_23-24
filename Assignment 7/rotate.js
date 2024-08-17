function rotate()
{
    let arr = document.getElementById("array").value;
    let n = document.getElementById("num").valueAsNumber;

    let arr1 = arr.split(",");
    const l = arr1.length;
    let rarr = Array(l);
    let temp = 0;

    n = n % l;
    

    for(let i=n;i<l;i++)
    {
        rarr[temp] = arr1[i];
        temp++;
    }

    for(let j=0;j<n;j++)
    {
        rarr[temp] = arr1[j];
        temp++;
    }
    
    var res = document.getElementById("result");
    res.innerHTML = "Rotated array by " + n + " is: " + rarr.join(" ");
}
