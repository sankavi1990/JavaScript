// Factory function
function createBudget() {
  let incomes = [];
  let expenses = [];

  function addIncome(amount) {
    incomes.push(amount);
  }

  function addExpense(amount) {
    expenses.push(amount);
  }

  function getBalance() {
    let totalIncome = incomes.reduce((a, b) => a + b, 0);
    let totalExpense = expenses.reduce((a, b) => a + b, 0);

    return {
      totalIncome,
      totalExpense,
      balance: totalIncome - totalExpense
    };
  }

  return {
    addIncome,
    addExpense,
    getBalance
  };
}

// export functions
export const budget = createBudget();
