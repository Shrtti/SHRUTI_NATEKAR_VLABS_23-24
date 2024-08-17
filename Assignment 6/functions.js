function area_of_triangle() {
    let l = document.getElementById("s1").valueAsNumber;
    let m = document.getElementById("s2").valueAsNumber;
    let n = document.getElementById("s3").valueAsNumber;

    console.log("Side 1:"+l+"  Side 2:"+m+"   Side 3:"+n);

    var s = (l + m + n) / 2;
    var a = (s * (s - l) * (s - m) * (s - n));
    var area = Math.sqrt(a).toFixed(2);
    console.log("Area is: "+area);
    document.getElementById("areatri").innerText = "Area of triangle is: " + area;
}

function area_of_circle() {
    var radius = document.getElementById("r").valueAsNumber;

    console.log("Radius: "+radius);

    var areacircle = (Math.PI*radius**2).toFixed(2);
    console.log("Area is: "+areacircle);
    document.getElementById("areacirc").innerText = "Area of circle is: " + areacircle;
}

