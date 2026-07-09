
        var hbk = 700;
        var hbg = 500;

        var b = [];
        var bl = [];
        var bt = [];
        var bw = 30;
        var blength = 6;

        for (let i = 0; i < blength; i++) {
            b[i] = document.getElementsByClassName("ball" + i)[0];
        }




        // b[0] = document.getElementsByClassName("b0")[0];
        // b[1] = document.getElementsByClassName("b1")[0];
        // b[2] = document.getElementsByClassName("b2")[0];
        // b[3] = document.getElementsByClassName("b3")[0];
        // b[4] = document.getElementsByClassName("b4")[0];
        // b[5] = document.getElementsByClassName("b5")[0];

        // let n = Math.floor(Math.random() * 10);//0～9


        function start() {

            // alert(b.length);

            for (let i = 0; i < blength; i++) {
                bl[i] = Math.floor(Math.random() * hbk - bw);
                bt[i] = Math.floor(Math.random() * hbg - bw);
                b[i].style.left = bl[i] + "px";
                b[i].style.top = bt[i] + "px";


            }







        }


        function move1() {

        }

