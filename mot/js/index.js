Math.floor(Math.random() * 2) + 1;//
console.log(Math.floor(Math.random() * 2));

var ckk = 700; //窗口宽
var ckg = 500; //窗口高

var b = []; // 球
var bx = []; // 球是否被选中
var nowxsl = 0; // 选中数量
var bl = [];
var bt = [];
var bw = 30;
var blength = 600;
var bzzqs = 0; // 需要选中球的数量

var time = 1000; //运动时间


var bdtime = []; //球运动时间
var bdl = [];
var bdt = [];

var bdlf = [];
var bdtf = [];

var okoknow="tj"; //提交按钮现在状态

for (let i = 0; i < blength; i++) {
    bdtime[i] = 0;
    bdl[i] = 0;
    bdt[i] = 0;

    // for (let i2 = 0; i2 < 600; i2++) {
    //     bdtime[i]

    // }
    bdlf[i] = 1;
    bdtf[i] = 1;


    bx[i] = false;
}
// b[0] = document.getElementsByClassName("b0")[0];
// b[1] = document.getElementsByClassName("b1")[0];
// b[2] = document.getElementsByClassName("b2")[0];
// b[3] = document.getElementsByClassName("b3")[0];
// b[4] = document.getElementsByClassName("b4")[0];
// b[5] = document.getElementsByClassName("b5")[0];

// let n = Math.floor(Math.random() * 10);//0～9


function move1() {

    // for (let i = 0; i < blength; i++) {


    //     for (let i2 = 10; i2 >= 0; i2--) {
    //         var isrun = false;


    //         if (time > bdtime[i][i2]) {

    //             bl[i] += bdl[i][i2]*bdlf[i];

    //             bt[i] += bdt[i][i2]*bdtf[i];

    //             if((bl[i]+bw)>=ckk){
    //                 bdlf[i] = -1;
    //             }
    //             if((bt[i]+bw)>=ckg){
    //                 bdtf[i] = -1;
    //             }

    //             if(bl[i]<=0){
    //                 bdlf[i] = 1;
    //             }
    //             if(bt[i]+bw<=0){
    //                 bdtf[i] = 1;
    //             }

    //             b[i].style.left = bl[i] + "px";
    //             b[i].style.top = bt[i] + "px";
    //             isrun=true;
    //             console.log(i+":"+i2);

    //             break;

    //         }




    //     }



    for (let i = 0; i < blength; i++) {

        if (bdtime[i] <= 0) {
            bdtime[i] = Math.floor(Math.random() * 180) + 1;
            bdl[i] = (Math.floor(Math.random() * 15) + 1) / 20;//

            bdt[i] = (Math.floor(Math.random() * 15) + 1) / 20;//

            if (Math.floor(Math.random() * 2) == 1) {
                bdlf[i] = 1;

            } else {
                bdlf[i] = -1;
            }
            if (Math.floor(Math.random() * 2) == 1) {
                bdtf[i] = 1;

            } else {
                bdtf[i] = -1;
            }

        }


        bdtime[i]--;

        bl[i] += bdl[i] * bdlf[i];

        bt[i] += bdt[i] * bdtf[i];

        if ((bl[i] + bw - bdl[i]) > ckk) {
            bdlf[i] = -1;
        }
        if ((bt[i] + bw - bdt[i]) > ckg) {
            bdtf[i] = -1;
        }

        if ((bl[i] + bdl[i]) < 0) {
            bdlf[i] = 1;
        }
        if ((bt[i] + bdt[i]) < 0) {
            bdtf[i] = 1;
        }

        b[i].style.left = bl[i] + "px";
        b[i].style.top = bt[i] + "px";



    }








    time--;

    if (time > 0) {
        setTimeout(move1, 1);
    }

    // }
}





function jsmove() {


    // for (let i = 0; i < blength; i++) {

    //     for (let i2 = 0; i2 <= 10; i2++) {

    //         if (i2 == 0) {
    //             bdtime[i][i2] = 0;
    //         } else {
    //             bdtime[i][i2] = bdtime[i][i2 - 1] + Math.floor(Math.random() * 300) + 1;//
    //         }



    //         bdl[i][i2] = Math.floor(Math.random() * 1) + 1;//

    //         bdt[i][i2] = Math.floor(Math.random() * 1) + 1;//




    //     }
    // }
    // alert(1);

    for (let i = 0; i < bzzqs; i++) {
        b[i].style.background = "red";
    }







    setTimeout(move1, 1000);
}

function start() {



    blength = document.getElementsByClassName("zqs")[0].value;

    bzzqs = document.getElementsByClassName("zzqs")[0].value;

    for (let i = 0; i < blength; i++) {
        // b[i] = document.getElementsByClassName("ball" + i)[0];

        var gamediv = document.getElementsByClassName("gamediv")[0];


        b[i] = document.createElement("div");
        gamediv.appendChild(b[i]);

        // b[i] = gamediv.createElement("div");
        b[i].className = "gamediv2 ball" + i;






        b[i].onclick = function () {
            console.log(i);

            if (bx[i] == false) {
                bx[i] = true;
                nowxsl++;

                b[i].style.background = "red";



            } else {
                bx[i] = false;
                nowxsl--;
                b[i].style.background = "green";
            }

            alert("点击了第 " + i + " 个球");


        };

    }
    // alert(b.length);

    for (let i = 0; i < blength; i++) {
        bl[i] = Math.floor(Math.random() * (ckk - bw));
        bt[i] = Math.floor(Math.random() * (ckg - bw));
        b[i].style.left = bl[i] + "px";
        b[i].style.top = bt[i] + "px";

        // b[i].style.top = "0px";

    }


    document.getElementsByClassName("startdiv")[0].style.display = "none";



    jsmove();




    // move1();
















}









function getValue() {
    const radio = document.querySelector('input[name="sd"]:checked');

    if (radio) {
        alert(radio.value);
    } else {
        alert("没有选择");
    }
}


function okok() {
    console.log("hi");


    for (let i = 0; i < blength; i++) {
        if (i < bzzqs) {
            if (bx[i]) {
                b[i].style.background = "green";
            } else {
                b[i].style.background = "yellow";
            }

        }else{
            if (bx[i]) {
                b[i].style.background = "red";
            } else {
                b[i].style.background = "#2b2b2b";
            }
        }
    }
}