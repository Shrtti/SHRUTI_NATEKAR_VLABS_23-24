function multiplyMatrices() {
    var matrix1 = [
        [document.getElementById("m1r1c1").valueAsNumber, document.getElementById("m1r1c2").valueAsNumber, document.getElementById("m1r1c3").valueAsNumber],
        [document.getElementById("m1r2c1").valueAsNumber, document.getElementById("m1r2c2").valueAsNumber, document.getElementById("m1r2c3").valueAsNumber],
        [document.getElementById("m1r3c1").valueAsNumber, document.getElementById("m1r3c2").valueAsNumber, document.getElementById("m1r3c3").valueAsNumber]
    ];


    var matrix2 = [
        [document.getElementById("m2r1c1").valueAsNumber, document.getElementById("m2r1c2").valueAsNumber, document.getElementById("m2r1c3").valueAsNumber],
        [document.getElementById("m2r2c1").valueAsNumber, document.getElementById("m2r2c2").valueAsNumber, document.getElementById("m2r2c3").valueAsNumber],
        [document.getElementById("m2r3c1").valueAsNumber, document.getElementById("m2r3c2").valueAsNumber, document.getElementById("m2r3c3").valueAsNumber]
    ];


    var result = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            for (var k = 0; k < 3; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    var res1 = document.getElementById("r1");
    var res2 = document.getElementById("r2");
    var res3 = document.getElementById("r3");

    res1.innerHTML = result[0].join(" ");
    res2.innerHTML = result[1].join(" ");
    res3.innerHTML = result[2].join(" ");
}