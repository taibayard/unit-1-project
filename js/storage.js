var storageHandler = function(gameObj, storageObj) {
    let z = parseFloat(localStorage.getItem(storageObj));
    switch (true) {
        case isNaN(z):
            localStorage.setItem(storageObj, gameObj);
            break;
        case gameObj > z:
            localStorage.setItem(storageObj, gameObj);
            break;
        case gameObj < z:
            return gameObj;
            break;
        default:
            console.log("error");
            break;
    }
    return gameObj;
}

function loadLocalStorage() {
    if (localStorage.length > 0) {
        console.log("working");
        game.income.cash = localStorage.getItem("currentCash");
        game.stats.cashFromClicks = localStorage.getItem("cashFromClicks");
        game.stats.totalCashGenerated = localStorage.getItem("totalEarnedCash");
        game.stats.clicks = localStorage.getItem("totalClicks");
    }
    setLocalStorage();

}

function setLocalStorage() {
    //handle storage for clicks
    handleClickStorage();
    //handle storage for cash
    handleCashStorage();
}

function handleCashStorage() {
    //handling current cash
    game.income.cash = round(parseFloat(game.income.cash),roundOffset);
    game.income.cash = storageHandler(game.income.cash, "currentCash");
    cashLabel.innerText = game.income.cash;
    //handles memeory for profit from click history
    game.stats.cashFromClicks = round(parseFloat(game.stats.cashFromClicks),roundOffset);
    game.stats.cashFromClicks = storageHandler(game.stats.cashFromClicks, "cashFromClicks");
    clickProfitLabel.innerText = game.stats.cashFromClicks;
    //handles memory for total earned
    game.stats.totalCashGenerated = round(parseFloat(game.stats.totalCashGenerated),roundOffset);
    game.stats.totalCashGenerated = storageHandler(game.stats.totalCashGenerated, "totalEarnedCash");
    totalProfitLabel.innerText = game.stats.cashFromClicks;
}

function handleClickStorage() {
    //handles memory for total click history
    game.stats.clicks = storageHandler(game.stats.clicks, "totalClicks");
    clickCount.innerText = game.stats.clicks;
}