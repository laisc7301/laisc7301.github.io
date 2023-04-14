window.addEventListener("resize", watchWindowSize);

		function watchWindowSize() {
			var windowWidth = window.innerWidth;
			var windowHeight = window.innerHeight;
			document.getElementsByClassName("myimg")[0].style.width = windowWidth + "px";
			document.getElementsByClassName("myimg")[0].style.height = windowHeight + "px";
		}
		watchWindowSize();




var myPic = [
			"https://laisc7301.github.io/blogger/bgimg/03793_canyonlands_6400x4000.jpg","https://laisc7301.github.io/blogger/bgimg/04194_pagview_4096x2304.jpg","https://laisc7301.github.io/blogger/bgimg/102803-5120x2880.jpg","https://laisc7301.github.io/blogger/bgimg/102974-1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/AmazonMangroves_ZH-CN2154443859_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/AVvXsEiZPe6NQFUJA-e-WXtuIIAFWkP7OaLJix8ouM-NBumieXHlNHqBLjU4Lv-zS7xQ3GlXv6I21Y2NfOViIzHXvLYGRL60OfmbehSD-.jpg","https://laisc7301.github.io/blogger/bgimg/BHNMBelize_ZH-CN9422261941_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/DarkSkyAcadia_ZH-CN1827511700_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/DarwinsArch_ZH-CN9740478501_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/FosterCoveredBridge_ZH-CN2672988563_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/GHDMarmot_ZH-CN5983212280_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/GSDNPest_ZH-CN0818304791_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/LastDollarRoad_ZH-CN1462265798_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/MarbleCanyon_ZH-CN1066862981_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/MidAutumn2022_ZH-CN9825550508_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/MoonlightRainier_ZH-CN6263832605_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/PyreneesPark_ZH-CN1341030921_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/SaintElias_ZH-CN2861097596_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/SourHerring_ZH-CN4136738467_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/SpringPoint_ZH-CN6445792697_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/SusitnaRiver_ZH-CN2317772890_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/SyltNordseeHoernum_ZH-CN6316415332_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/TeaGardensMunnar_ZH-CN9587720369_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/th.jpg","https://laisc7301.github.io/blogger/bgimg/th2.jpg","https://laisc7301.github.io/blogger/bgimg/th3.jpg","https://laisc7301.github.io/blogger/bgimg/theBeginningofAutumn2022_ZH-CN9413449297_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/TwoJackLake_ZH-CN4716355677_1920x1080.jpg","https://laisc7301.github.io/blogger/bgimg/YellowstoneUGB_ZH-CN2518690319_1920x1080.jpg"
];
var picIndex = parseInt(myPic.length * Math.random());
document.getElementsByClassName("myimg")[0].src = myPic[picIndex];