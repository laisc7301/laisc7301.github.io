function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}

var subtitleobjblogger0 = document.getElementsByClassName("description")[0];
if (subtitleobjblogger0 != undefined) {
	var subtitleobjblogger1 = subtitleobjblogger0.firstChild;
}




var subtitleobj = document.getElementsByClassName("site-subtitle")[0];


var subtitle = [
	"少年一贯快马杨帆，道阻且长且不转弯，要盛大，要绚烂，要哗然。要用理想的泰坦尼克号去撞现实的冰川，要当烧赤壁的风而非借箭的草船，要为一片海就肯翻越万山。",

	"请不要相信，胜利就像山坡上的蒲公英一样唾手可得。但是请相信，世上总有一些美好，值得我们全力以赴，哪怕粉身碎骨。科科瓦多山顶的救世基督，在俯瞰着红尘，俯瞰着众生。在他眼前可能，所有的悲欢离合都没有什么大不了。但是我们毕竟身处红尘。他们明白艰难的生活并不浪漫，踏实的活着才是最高明的艺术。你爱上一件事物，当然不是爱他的成败，你爱的就是他的气质，对不对？任何敢于放弃自我，不断革新，为心中的目标，不断的改变自己的人都值得尊敬。",

	"监狱里的高墙实在是很有趣。刚入狱的时候，你痛恨周围的高墙；慢慢地，你习惯了生活在其中；最终你会发现自己不得不依靠它而生存。这就是体制化。——《肖申克的救赎》",

	"有些鸟注定是不会被关在笼子里的，因为它们的每一片羽毛都闪耀着自由的光辉。——《肖申克的救赎》",

	"我不得不提醒自己有些鸟是不能关在笼子里的，他们的羽毛太漂亮了，当他们飞走的时候，你会觉得把他们关起来是种罪恶。但是，他们不在了你会感到寂寞，可是我只是想我的朋友了。——《肖申克的救赎》",

	"因为喜欢的东西很贵，想去的地方很远，所以你必须努力。",

	"永远年轻，永远热泪盈眶。——《达摩流浪者》",

	"如果有人冤枉你吃了他的东西，你不要剖开自己的肚子以证清白，应该挖出他的眼睛咽下去，让他在你肚子里，看看清楚。 不要掉进“自证陷阱”！ ——《反击》",

	"生活不可能像你想象得那么好，但也不会像你想象得那么糟。我觉得人的脆弱和坚强都超乎自己的想象。有时，我可能脆弱得一句话就泪流满面，有时，也发现自己咬着牙走了很长的路。 ——莫泊桑",
	
	"不是所有的虫子都能变成蝴蝶，因为有的是他娘的蛆",
	
	"你能在浪费时间中获得乐趣，就不是浪费时间——罗素",
	
	"最重要的东西，是肉眼看不见的。——《小王子》",
	
	"如果不去遍历世界，我们就不知道什么是我们精神和情感的寄托，但我们一旦遍历了世界，却发现我们再也无法回到那美好的地方去了。当我们开始寻求，我们就已经失去，而我们不开始寻求，我们根本无法知道自己身边的一切是如此可贵。——《小王子》",
	
	"沙漠之所以美丽，是因为在它的某个角落隐藏着一口井。——《小王子》"
];
var titleindex = getRandomIntInclusive(0, subtitle.length - 1);
if (subtitleobjblogger1 != undefined) {
	subtitleobjblogger1.innerHTML = subtitle[titleindex];
}
if (subtitleobj != undefined) {
	subtitleobj.innerHTML = subtitle[titleindex];
}