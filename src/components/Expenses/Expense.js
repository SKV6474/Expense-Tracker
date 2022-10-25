import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './expenseitem';
import ExpenseChart from './ExpenseChart';
import Card from '../UI/Card';
import './Expense.css';



function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2019');

    const changeFilter = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilter} />
            <ExpenseChart expenses={filteredExpenses} />
            {filteredExpenses.length === 0 ? <p className='value'>No Expense Found!</p> : filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    curr={expense.curr}
                    amount={expense.amount}
                    date={expense.date}
                />))}
        </Card>
    );
}

export default Expenses;


