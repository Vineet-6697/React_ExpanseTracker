import React from 'react';
import './ExpensesList.css';
import ExpenceItems from './Expenses/ExpenceItem';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'> Found no expenses.</h2>
  }
  return (
    <ul className='expense-list'>
        { props.items.map((expense) => (
      <ExpenceItems
        title={expense.title}
        key={expense.id}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
    </ul>
  )
}

export default ExpensesList