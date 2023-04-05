window.addEventListener("resize", watchWindowSize);

		function watchWindowSize() {
			var windowWidth = window.innerWidth;
			var windowHeight = window.innerHeight;
			document.getElementsByClassName("myimg")[0].style.width = windowWidth + "px";
			document.getElementsByClassName("myimg")[0].style.height = windowHeight + "px";
		}
		watchWindowSize();




var myPic = [
			"https://laisc7301.github.io/bgimg/03793_canyonlands_6400x4000.jpg","https://laisc7301.github.io/bgimg/04194_pagview_4096x2304.jpg","https://laisc7301.github.io/bgimg/102803-5120x2880.jpg","https://laisc7301.github.io/bgimg/102974-1920x1080.jpg","https://laisc7301.github.io/bgimg/AmazonMangroves_ZH-CN2154443859_1920x1080.jpg","https://laisc7301.github.io/bgimg/AVvXsEiZPe6NQFUJA-e-WXtuIIAFWkP7OaLJix8ouM-NBumieXHlNHqBLjU4Lv-zS7xQ3GlXv6I21Y2NfOViIzHXvLYGRL60OfmbehSD-.jpg","https://laisc7301.github.io/bgimg/BHNMBelize_ZH-CN9422261941_1920x1080.jpg","https://laisc7301.github.io/bgimg/DarkSkyAcadia_ZH-CN1827511700_1920x1080.jpg","https://laisc7301.github.io/bgimg/DarwinsArch_ZH-CN9740478501_1920x1080.jpg","https://laisc7301.github.io/bgimg/FosterCoveredBridge_ZH-CN2672988563_1920x1080.jpg","https://laisc7301.github.io/bgimg/GHDMarmot_ZH-CN5983212280_1920x1080.jpg","https://laisc7301.github.io/bgimg/GSDNPest_ZH-CN0818304791_1920x1080.jpg","https://laisc7301.github.io/bgimg/LastDollarRoad_ZH-CN1462265798_1920x1080.jpg","https://laisc7301.github.io/bgimg/MarbleCanyon_ZH-CN1066862981_1920x1080.jpg","https://laisc7301.github.io/bgimg/MidAutumn2022_ZH-CN9825550508_1920x1080.jpg","https://laisc7301.github.io/bgimg/MoonlightRainier_ZH-CN6263832605_1920x1080.jpg","https://laisc7301.github.io/bgimg/PyreneesPark_ZH-CN1341030921_1920x1080.jpg","https://laisc7301.github.io/bgimg/SaintElias_ZH-CN2861097596_1920x1080.jpg","https://laisc7301.github.io/bgimg/SourHerring_ZH-CN4136738467_1920x1080.jpg","https://laisc7301.github.io/bgimg/SpringPoint_ZH-CN6445792697_1920x1080.jpg","https://laisc7301.github.io/bgimg/SusitnaRiver_ZH-CN2317772890_1920x1080.jpg","https://laisc7301.github.io/bgimg/SyltNordseeHoernum_ZH-CN6316415332_1920x1080.jpg","https://laisc7301.github.io/bgimg/TeaGardensMunnar_ZH-CN9587720369_1920x1080.jpg","https://laisc7301.github.io/bgimg/th.jpg","https://laisc7301.github.io/bgimg/th2.jpg","https://laisc7301.github.io/bgimg/th3.jpg","https://laisc7301.github.io/bgimg/theBeginningofAutumn2022_ZH-CN9413449297_1920x1080.jpg","https://laisc7301.github.io/bgimg/TwoJackLake_ZH-CN4716355677_1920x1080.jpg","https://laisc7301.github.io/bgimg/YellowstoneUGB_ZH-CN2518690319_1920x1080.jpg"
];
var picIndex = parseInt(myPic.length * Math.random());
document.getElementsByClassName("myimg")[0].src = myPic[picIndex];