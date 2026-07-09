
var ckk = 700; //窗口宽
var ckg = 500; //窗口高

var b = []; // 球
var bl = [];
var bt = [];
var bw = 30;
// var blength = 6;





// b[0] = document.getElementsByClassName("b0")[0];
// b[1] = document.getElementsByClassName("b1")[0];
// b[2] = document.getElementsByClassName("b2")[0];
// b[3] = document.getElementsByClassName("b3")[0];
// b[4] = document.getElementsByClassName("b4")[0];
// b[5] = document.getElementsByClassName("b5")[0];

// let n = Math.floor(Math.random() * 10);//0～9


function start() {



    var blength = document.getElementsByClassName("zqs")[0].value;

    for (let i = 0; i < blength; i++) {
        // b[i] = document.getElementsByClassName("ball" + i)[0];

        var gamediv = document.getElementsByClassName("gamediv")[0];


        b[i] = document.createElement("div");
        gamediv.appendChild(b[i]);

        // b[i] = gamediv.createElement("div");
        b[i].className = "gamediv2 ball" + i;

    }
    // alert(b.length);

    for (let i = 0; i < blength; i++) {
        bl[i] = Math.floor(Math.random() * (ckk - bw));
        bt[i] = Math.floor(Math.random() * (ckg - bw));
        b[i].style.left = bl[i] + "px";
        b[i].style.top = bt[i] + "px";

        // b[i].style.top = "0px";

    }











}


function move1() {

}



function getValue() {
    const radio = document.querySelector('input[name="sd"]:checked');

    if (radio) {
        alert(radio.value);
    } else {
        alert("没有选择");
    }
}