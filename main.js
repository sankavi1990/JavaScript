import { budget } from "./budget.js";

window.addIncomeUI = function () {
  let amount = Number(prompt("Enter income amount:"));
  if (amount > 0) {
    budget.addIncome(amount);
    alert("Income added");
  }
};

window.addExpenseUI = function () {
  let amount = Number(prompt("Enter expense amount:"));
  if (amount > 0) {
    budget.addExpense(amount);
    alert("Expense added");
  }
};

window.showSummary = function () {
  let result = budget.getBalance();

  document.getElementById("output").innerHTML = `
    Total Income: ₹${result.totalIncome}<br>
    Total Expense: ₹${result.totalExpense}<br>
    Balance: ₹${result.balance}
  `;
};
