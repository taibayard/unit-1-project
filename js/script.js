const coin = document.getElementsByClassName("bitcoin-wrapper")[0];
const clickCount = document.getElementsByClassName("click-count")[0].getElementsByTagName("a")[0];
const cashLabel =  document.getElementsByClassName("current-cash")[0].getElementsByTagName("a")[0];
let game = {
    income: {
        cash: 0,
        clickMultiplier: 1,
        clickWorth: 0.01
    },
    stats: {
        clicks: 0,
        cashFromClicks: 0,
        totalCashGenerated: 0
    }
}
var coinClick = function() {
    game.income.cash += (game.income.clickWorth * game.income.clickMultiplier)
    game.stats.cashFromClicks += (game.income.clickWorth * game.income.clickMultiplier);
    game.stats.totalCashGenerated += (game.income.clickWorth * game.income.clickMultiplier);
    game.stats.clicks++;
    setLocalStorage();
}

function addEvents() {
    coin.addEventListener("click", coinClick);
}
window.onload = function() {
    setLocalStorage();
    addEvents();
}