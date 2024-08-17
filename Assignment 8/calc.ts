function len() {
    var sen1 = (document.getElementById('s1') as HTMLInputElement).value;
    var sen2 = (document.getElementById('s2') as HTMLInputElement).value;

    let l1 = sen1.length;
    let l2 = sen2.length;
    let op = document.getElementById('lenp');
    op.innerHTML = "Length of first is "+l1+"<br/>Length of second is "+l2;
}

function concat() {

    var sen1 = (document.getElementById('s1') as HTMLInputElement).value;
    var sen2 = (document.getElementById('s2') as HTMLInputElement).value;

    var res = sen1 + sen2; 
    let cp = document.getElementById('conp');
    cp.innerHTML = "Concatenated sentence "+res;
}

function charAt() {

    var sen1 = (document.getElementById('s1') as HTMLInputElement).value;
    var sen2 = (document.getElementById('s2') as HTMLInputElement).value;
    var ind1 = (document.getElementById('c1') as HTMLInputElement).valueAsNumber;
    var ind2 = (document.getElementById('c2') as HTMLInputElement).valueAsNumber;
    
    let ca1 = sen1.charAt(ind1);
    let ca2 = sen2.charAt(ind2);

    let caap = document.getElementById('cap');
    caap.innerHTML = "Character in sentence 1 is "+ca1+"<br/>Character in sentence 2 is "+ca2;
}

function charcodeAt() {

    var sen1 = (document.getElementById('s1') as HTMLInputElement).value;
    var sen2 = (document.getElementById('s2') as HTMLInputElement).value;
    var ind1 = (document.getElementById('ch1') as HTMLInputElement).valueAsNumber;
    var ind2 = (document.getElementById('ch2') as HTMLInputElement).valueAsNumber;
    
    let cha1 = sen1.charCodeAt(ind1);
    let cha2 = sen2.charCodeAt(ind2);

    let chp = document.getElementById('chap');
    chp.innerHTML = "Character code in sentence 1 is "+cha1+"<br/>Character in sentence 1 is "+cha2;
}

function IndexOf() {

    var sen1 = (document.getElementById('s1') as HTMLInputElement).value;
    var sen2 = (document.getElementById('s2') as HTMLInputElement).value;
    var re1 = (document.getElementById('chara1') as HTMLInputElement).value;
    var rec1 = (document.getElementById('rechar1') as HTMLInputElement).value;
    var re2 = (document.getElementById('chara2') as HTMLInputElement).value;
    var rec2 = (document.getElementById('rechar2') as HTMLInputElement).value;
    
    let rese1 = sen1.replace(re1,rec1);
    let rese2 = sen1.replace(re2,rec2);

    let r = document.getElementById('rep');
    r.innerHTML = "Replaced sentence 1: "+rese1+"<br/>Replaced sentence 2: "+rese2;
}

function Replace() {

    var sen1 = (document.getElementById('s1') as HTMLInputElement).value;
    var sen2 = (document.getElementById('s2') as HTMLInputElement).value;
    var i1 = (document.getElementById('char1') as HTMLInputElement).value;
    var i2 = (document.getElementById('char2') as HTMLInputElement).value;
    
    let nind1 = sen1.indexOf(i1);
    let nind2 = sen2.indexOf(i2);

    let index = document.getElementById('ino');
    index.innerHTML = "Character in sentence 1 is "+nind1+"<br/>Character in sentence 2 is "+nind2;
}

function lower() {

    var sen1 = (document.getElementById('s1') as HTMLInputElement).value;
    var sen2 = (document.getElementById('s2') as HTMLInputElement).value;
    
    let lo1 = sen1.toLowerCase();
    let lo2 = sen2.toLowerCase();
    let lp = document.getElementById('lowp');
    lp.innerHTML = "Lowercase of first is "+lo1+"<br/>Lowercase of second is "+lo2;
}

function upper() {

    var sen1 = (document.getElementById('s1') as HTMLInputElement).value;
    var sen2 = (document.getElementById('s2') as HTMLInputElement).value;
    
    let u1 = sen1.toUpperCase();
    let u2 = sen2.toUpperCase();
    let up = document.getElementById('upp');
    up.innerHTML = "Uppercase of first is "+u1+"<br/>Uppercase of second is "+u2;
}