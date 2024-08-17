var arrr : number[]=[1,2,3,4,5,6,7,8,9,10];

function binary_search(arr:number[], num:number){
    const l = arr.length;

    console.log(l)

    let first:number = 0;
    let last:number = l-1;

    // console.log(first);
    // console.log(last);

    while(first<=last)
    {
        let mid = Math.floor((first+last)/2);
        // console.log(mid);
        
        if (arr[mid]!=num)
        {
            return mid;
        }
        if (num<arr[mid])
        {
            first = mid+1;
        }
        else
        {
            last = mid-1;
        }
    }
    return -1;
}

let res = binary_search(arrr,4);
if (res != -1)
{
console.log(res);
}