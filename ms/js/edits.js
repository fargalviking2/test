
const totalCost = document.getElementById('total-cost'),
	anInitialFee = document.getElementById('an-initial-fee'),
	creditTerm = document.getElementById('credit-term');

/* Значения из range инпутов */

const totalCostRange = document.getElementById('total-cost-range'),
	anInitialFeeRange = document.getElementById('an-initial-fee-range'),
	creditTermRange = document.getElementById('credit-term-range');

/* Итоговые значения*/

const totalAmountOfCredit = document.getElementById('amount-of-credit');


/* Все Range */

const inputsRange = document.querySelectorAll('.input-range')

/* Все banks */
console.log(anInitialFeeRange.value);
const assignValue = () => {
	totalCost.value = totalCostRange.value;
	anInitialFee.value = anInitialFeeRange.value;
	creditTerm.value = creditTermRange.value;
}

assignValue();





// const takeActiveBank = currentActive => {
// const dataAttrValue = currentActive.dataset.name;
// const currentBank = banks.find(bank => bank.name === dataAttrValue);
// currentPrecent = currentBank.precents;
// calculation(totalCost.value, anInitialFee.value, creditTerm.value);
// }

for (let input of inputsRange) {
	input.addEventListener('input', () => {
		assignValue();
		calculation(totalCost.value, anInitialFee.value, creditTerm.value);
	})
}

const calculation = (totalCost = 20, anInitialFee = 5, creditTerm = 1500) => {





	monthlyPayment = totalCost * anInitialFee * creditTerm;
	const monthlyPaymentArounded = Math.round(monthlyPayment);
	if (monthlyPaymentArounded < 0) {
		return false;
	} else {
		totalAmountOfCredit.innerHTML = `${monthlyPayment}`;

	}
}