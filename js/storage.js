var storageHandler  = function(gameObj, storageObj) {
    let z = parseFloat(localStorage.getItem(storageObj));
    switch (true) {
        case isNaN(z):
            localStorage.setItem(storageObj, gameObj);
            break;
        case gameObj > z:
            localStorage.setItem(storageObj, gameObj);
            break;
        case gameObj < z:
            return z;
            break;
        default:
            console.log("error");
            break;
    }
    return gameObj;
}
function setLocalStorage() {
    //handle storage for clicks
    handleClickStorage();
    //handle storage for cash
    handleCashStorage();
}
function handleCashStorage() {
    //handling current cash
    game.income.cash = parseFloat((game.income.cash).toFixed(2));
    game.income.cash = storageHandler(game.income.cash, "currentCash");
    cashLabel.innerText = game.income.cash;
    //handles memeory for profit from click history
    game.stats.cashFromClicks = parseFloat((game.stats.cashFromClicks).toFixed(2));
    game.stats.cashFromClicks = storageHandler(game.stats.cashFromClicks, "cashFromClicks");
    clickProfitLabel.innerText = "BTC "+game.stats.cashFromClicks;
}

function handleClickStorage() {
    //handles memory for total click history
    game.stats.clicks = storageHandler(game.stats.clicks, "totalClicks");
    clickCount.innerText = game.stats.clicks;
}
