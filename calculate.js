//salary calculation

function moneyCalculation(monthlySalary){
  const amountInput = document.getElementById(monthlySalary);
  const amountValue = amountInput.value;
  const amount = parseFloat(amountValue);
  return amount;
}

//the addition of expense and extra
function addTextIn (elementId, others){
  const element = document.getElementById(elementId);
  element.innerText = others;
}

//total expenses
function expensesMonthly (){
  const foodBill = moneyCalculation('food-bill');
  const houseRent = moneyCalculation('house-bill');
  const cloths = moneyCalculation('cloth-bill');

  const totalExpenses = foodBill + houseRent + cloths;
  return totalExpenses;
}

//Salary
function salaryCalculation (){
  const salary = moneyCalculation('income-amount');
  return salary;
}

//total extra
function extendedMoney (){
  const extraMoney = salaryCalculation() - expensesMonthly();
  return extraMoney;
}

//savings
function floatingExtendedMoney(){
  const savedFunc = extendedMoney();
  const saved = parseFloat(savedFunc);
  return saved;
}

function monthlySavings (){
  const saveMoney = 0.2 * floatingExtendedMoney();
  return saveMoney;
}

function afterSavings (){
  const residualMoney = extendedMoney() - monthlySavings();
  return residualMoney;
}
document.getElementById('calculate').addEventListener('click', function (){
  addTextIn('total-expense', expensesMonthly());
  addTextIn('remainder', extendedMoney());
})

document.getElementById('save-money').addEventListener('click', function(){
  addTextIn('money-saved', monthlySavings());
  addTextIn('residual', afterSavings());
})

