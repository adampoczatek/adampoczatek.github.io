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

let test = (a,b) => {
	let c = a*b,
		d;

	{
		let myPrivVar = c;

		d = myPrivVar / 5 > 5;  
	}

	return d;
}

test(4,5); 

  let t = new Wallet('500');
console.log("Yes!");  
