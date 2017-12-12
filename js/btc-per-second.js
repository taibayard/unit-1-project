function addBtc(){
	setInterval(function(){
		let z = game.income.cash;
		game.income.cash += game.upgrades.values.gpu;
		if(z != game.income.cash && isNaN(z) === false && z != null && localStorage.length > 0){
			setLocalStorage();
		}
	},1000)
}