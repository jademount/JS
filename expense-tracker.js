const account = {
	name: "Daniel Lin",
	expenses: [],
	incomes: [],
	addExpense: function (description, amount) {
		this.expenses.push(
			{
				description: description,
				amount: amount
			}
		)
	},
	addIncome: function (description, amount) {
		this.incomes.push(
			{
				description: description,
				amount: amount
			}
		)
	},

	getAccountSummary: function () {
		let totalExpense = 0
		let totalIncome = 0
		this.expenses.forEach(function (item) {
			totalExpense = totalExpense + item.amount
		}
		)
		this.incomes.forEach(function (item) {
			totalIncome = totalIncome + item.amount
		}
		)

		return `${this.name} has a balance of ${totalIncome - totalExpense}.`

	}

}
//1.add income array to account
//2.addIncome method -> description, amount
//3.tweak getAccountSummary

account.addIncome('Job', 1000)
account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
console.log(account)
console.log(account.getAccountSummary())
