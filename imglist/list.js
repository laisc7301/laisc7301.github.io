window.addEventListener("resize", watchWindowSize);

		function watchWindowSize() {
			var windowWidth = window.innerWidth;
			var windowHeight = window.innerHeight;
			document.getElementsByClassName("myimg")[0].style.width = windowWidth + "px";
			document.getElementsByClassName("myimg")[0].style.height = windowHeight + "px";
		}
		watchWindowSize();




var myPic = [
			"https://laisc7301.github.io/imglist/03793_canyonlands_6400x4000.jpg","https://laisc7301.github.io/imglist/04194_pagview_4096x2304.jpg","https://laisc7301.github.io/imglist/102803-5120x2880.jpg"
];
var picIndex = parseInt(myPic.length * Math.random());
document.getElementsByClassName("myimg")[0].src = myPic[picIndex];