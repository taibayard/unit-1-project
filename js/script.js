const coin = document.getElementsByClassName("bitcoin-wrapper")[0];
const clickCount = document.getElementsByClassName("click-count")[0].getElementsByTagName("a")[0];
let game = {
    income: {
        cash: 0,
        clickMultiplier: 1,
        clickWorth: .25
    },
    stats: {
        clicks: 0,
        cashFromClicks: 0,
        totalCashGenerated: 0
    }
}
var coinClick = function() {
    console.log("clicked");
    game.income.cash += (game.income.clickWorth * game.income.clickMultiplier);
    game.stats.cashFromClicks += (game.income.clickWorth * game.income.clickMultiplier);
    game.stats.totalCashGenerated += (game.income.clickWorth * game.income.clickMultiplier);
    game.stats.clicks++;
    setLocalStorage();
}
function setLocalStorage(){
	//setting total clicks
	let storedClicks = parseInt(localStorage.getItem("totalClicks"));
	console.log(storedClicks);
	switch(true){
		case isNaN(storedClicks):
			localStorage.setItem("totalClicks",game.stats.clicks);
			updateClickCount(game.stats.clicks);
		break;
		case game.stats.clicks > storedClicks:
			localStorage.setItem("totalClicks",game.stats.clicks);
			updateClickCount(game.stats.clicks);
		break;
		case game.stats.clicks < storedClicks:
			game.stats.clicks = storedClicks;
			updateClickCount(game.stats.clicks);
		break;
		default:
			console.log("error");
		break;
	}
}
function updateClickCount(val){
	clickCount.innerText = val;
}
function addEvents(){
	coin.addEventListener("click", coinClick);
}
window.onload = function(){
	setLocalStorage();
	addEvents();
}