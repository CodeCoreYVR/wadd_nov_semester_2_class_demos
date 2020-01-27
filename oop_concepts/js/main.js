// OOP Concepts
// 1. Encapsulation
// Suppose we have a function to calculate monthly expenses on a daily base

const food = 25;
const transportation = 9;
const drinks = 3;
const rent = 40;
const otherExpenses = 10;

function calculateMonthlyExpenses(
  food,
  transportation,
  drinks,
  rent,
  otherExpenses
) {
  return (food + transportation + drinks + rent + otherExpenses) * 30;
}

console.log(
  calculateMonthlyExpenses(food, transportation, drinks, rent, otherExpenses)
);
