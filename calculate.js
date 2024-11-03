function moneyCalculation(monthlySalary){
  const amountInput = document.getElementById(monthlySalary);
  const amountValue = amountInput.value;
  const amount = parseFloat(amountValue);
  return amount;
}

function expensesMonthly (){
  const foodBill = moneyCalculation('food-bill');
  const houseRent = moneyCalculation('house-bill');
  const cloths = moneyCalculation('cloth-bill');

  const totalExpenses = foodBill + houseRent + cloths;
  return totalExpenses;
}

function salaryCalculation (){
  const salary = moneyCalculation('income-amount');
  return salary;
}

document.getElementById('calculate').addEventListener('click', function(){
  const calculated = salaryCalculation() - expensesMonthly();
  console.log(calculated);
})

