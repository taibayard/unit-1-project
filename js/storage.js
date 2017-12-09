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
    cashLabel.innerText = "Ƀ " + game.income.cash;
}

function handleClickStorage() {
    game.stats.clicks = storageHandler(game.stats.clicks, "totalClicks");
    clickCount.innerText = game.stats.clicks;
}
