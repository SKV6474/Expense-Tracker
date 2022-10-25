import React, { useState } from 'react';
import Expenses from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';



function App() {
  const dummyExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      curr: 'Rs. ',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', curr: '$ ', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      curr: 'Rs. ',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      curr: '$ ',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => { return [expense, ...prevExpense]; });
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
