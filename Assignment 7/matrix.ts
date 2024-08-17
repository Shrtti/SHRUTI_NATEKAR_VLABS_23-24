// let matrix1:number[][] = [
//     [1,1,1],
//     [2,2,2],
//     [3,3,3]
// ]

// let matrix2:number[][]=[
//     [3,3,3],
//     [2,2,2],
//     [1,1,1]
// ]

// let result:number[][]=[
//     [0,0,0],
//     [0,0,0],
//     [0,0,0]
// ]

// for (let i=0;i<matrix1.length;i++)
// {
//     for (let j=0;j<matrix1[0].length;j++)
//     {
//         result[i][j] += matrix1[i][j]*matrix2[i][j];
//     }
// }

// for (let i=0;i<matrix1.length;i++)
// {
//     for (let j=0;j<matrix1[0].length;j++)
//     {
//         console.log(result[i][j])
//     }
// }

let matrix1: number[][] = [
    [1, 2, 3],
    [9, 7, 0],
    [8, 6, 2]
];

let matrix2: number[][] = [
    [4, 6, 10],
    [2, 0, 2],
    [1, 5, 7]
];

let result: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];


for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[0].length; j++) {
        for(let k=0; k<matrix2.length;k++){
            result[i][j] += matrix1[i][k] * matrix2[k][j];
        }
    }
}

function print_op(){
for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[0].length; j++) {
        console.log(result[i][j]);
    }
}
}