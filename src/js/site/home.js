import * as lib from "modules/moneyCalculator.js";
import * as m1 from "modules/moduleOne.js";

class Wallet {
	constructor(cash) {
		this.cash = cash;
	}

	getCash () {
		return this.penceToPounds(this.cash);
	}
 
	penceToPounds (amount) {
		return lib.penceToPounds(amount);
	} 
}

 
debugger; 
 

  let t = new Wallet('500');
console.log("Yess, yes!");  
