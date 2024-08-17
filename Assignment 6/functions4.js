function check_prime(number){
    

    if (number==1 || number==0)
    {
        return false;
    }
    else if(number===2)
    {
        return true;
    }
    for (let i=2;i<number;i++)
        {
            if(number%i == 0)
            {
                return false;
            }
        }
        return true;
}

function prime_number()
{
    let n = document.getElementById("num").valueAsNumber;
    let pr = check_prime(n);

    if (pr)
    {
        document.getElementById("prnu").innerText = "The number is a prime number.";
    }
    else
    {
        if (n==1 || n==0)
        {
            document.getElementById("prnu").innerText = "The number is neither prime nor composite number.";
        }
        else
        {
            document.getElementById("prnu").innerText = "The number is a composite number.";
        }
    }
}