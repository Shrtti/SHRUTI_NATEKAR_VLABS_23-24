function bubble_sort(arr) {
    for (let i=0; i<arr.length; i++)
    {
        for(let j=0; j<(arr.length-i-1); j++)
        {
            if (arr[j] > arr[j + 1])
            {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function binary_search(arr, num) {    
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            return mid;
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}   

function print_result()
{
    let ip = document.getElementById('input').value;
    let arr = ip.split(',').map(Number);
    const n = document.getElementById('num').valueAsNumber;
    res = document.getElementById('result');
    

    bubble_sort(arr);
    const index = binary_search(arr, n);

    res = document.getElementById('result');
    if (index !== -1)
    {
        res.innerHTML = "Element "+ n +" found at: "+ index + "(After rearranging in ascending order)";
    }
    else
    {
        res.innerHTML = "Element not found";
    }
}