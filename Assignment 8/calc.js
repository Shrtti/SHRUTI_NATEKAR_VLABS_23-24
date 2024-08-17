var sen1;
var sen2;

function set_val(){
    sen1 = document.getElementById('s1').value;
    sen2 = document.getElementById('s2').value;
}

function len() {
    set_val();
    var l1 = sen1.length;
    var l2 = sen2.length;
    var op = document.getElementById('lenp');
    op.innerHTML = "Length of first sentence is " + l1 + "<br/>Length of second sentence is " + l2;
}

function concat() {
    set_val();
    var res = sen1 + sen2;
    var cp = document.getElementById('conp');
    cp.innerHTML = "Concatenated sentence: " + res;
}

function charAt() {
    set_val();
    let flag =0;
    let flag1 =0;
    var ind1 = document.getElementById('c1').valueAsNumber;
    var ind2 = document.getElementById('c2').valueAsNumber;
    var cap = document.getElementById('cap');
    
    if (ind1 > sen1.length){
        flag = 1;
    }
    if (ind2 > sen2.length){
        flag1 = 1;
    }

    if (flag==1 && flag1==1)
    {
        cap.innerHTML = "Invalid Index for both the sentences";
        return;
    }
    else if(flag1 == 1)
    {
        cap.innerHTML = "Invalid Index for Sentence 2";
        return;
    }
    else if(flag == 1)
    {
        cap.innerHTML = "Invalid Index for Sentence 1";
        return;
    }

    var ca1 = sen1.charAt(ind1);
    var ca2 = sen2.charAt(ind2);
    
    cap.innerHTML = "Character in sentence 1 is " + ca1 + "<br/>Character in sentence 2 is " + ca2;
}

function charcodeAt() {
    set_val();
    let flag =0;
    let flag1 =0;
    var ind1 = document.getElementById('ch1').valueAsNumber;
    var ind2 = document.getElementById('ch2').valueAsNumber;
    var cha1 = sen1.charCodeAt(ind1);
    var cha2 = sen2.charCodeAt(ind2);
    var chp = document.getElementById('chap');

    if (ind1 > sen1.length){
        flag = 1;
    }
    if (ind2 > sen2.length){
        flag1 = 1;
    }

    if (flag==1 && flag1==1)
    {
        chp.innerHTML = "Invalid Index for both the sentences";
        return;
    }
    else if(flag1 == 1)
    {
        chp.innerHTML = "Invalid Index for Sentence 2";
        return;
    }
    else if(flag == 1)
    {
        chp.innerHTML = "Invalid Index for Sentence 1";
        return;
    }
    chp.innerHTML = "Character code in sentence 1 is " + cha1 + "<br/>Character in sentence 1 is " + cha2;
}

function Replace() {
    set_val();
    var re1 = document.getElementById('chara1').value;
    var rec1 = document.getElementById('rechar1').value;
    var re2 = document.getElementById('chara2').value;
    var rec2 = document.getElementById('rechar2').value;
    var r = document.getElementById('rep');

    if (sen1.indexOf(re1) === -1) {
        r.innerHTML = "Character not present in Sentence 1";
        return;
    }
    if (sen2.indexOf(re2) === -1) {
        r.innerHTML = "Character not present in Sentence 2";
        return;
    }
    var rese1 = sen1.replace(re1, rec1);
    var rese2 = sen2.replace(re2, rec2);
   
    r.innerHTML = "Replaced sentence 1: " + rese1 + "<br/>Replaced sentence 2: " + rese2;
}
function IndexOf() {
    set_val();
    var i1 = document.getElementById('char1').value;
    var i2 = document.getElementById('char2').value;
    var nind1 = sen1.indexOf(i1);
    var nind2 = sen2.indexOf(i2);
    var index = document.getElementById('ino');
    if(nind2==-1 && nind1==-1)
    {
        index.innerHTML = "Invalid index in both the sentences";    
        return;
    }
    if(nind1==-1)
    {
        index.innerHTML = "Invalid index in sentence 1";    
        return;
    }
    if(nind2==-1)
    {
        index.innerHTML = "Invalid index in sentence 2";    
        return;
    }
    index.innerHTML = "Character in sentence 1 is " + nind1 + "<br/>Character in sentence 2 is " + nind2;
}

function lower() {
    set_val();
    var lo1 = sen1.toLowerCase();
    var lo2 = sen2.toLowerCase();
    var lp = document.getElementById('lowp');
    lp.innerHTML = "Lowercase of first is: " + lo1 + "<br/>Lowercase of second is: " + lo2;
}
function upper() {
    set_val();
    var u1 = sen1.toUpperCase();
    var u2 = sen2.toUpperCase();
    var up = document.getElementById('upp');
    up.innerHTML = "Uppercase of first is: " + u1 + "<br/>Uppercase of second is: " + u2;
}
