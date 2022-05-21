import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter.js";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <div>
      <li><Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />

        {/* {filteredExpenses.length === 0 ? (<p>No Expenses Found.</p>) : (filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )))} */}

        {/* Also we can use these two methods*/}

        {/* {filteredExpenses.length === 0 && <p>No Expenses Found.</p> */}
        <ExpensesList items={filteredExpenses} />
      </Card>
      </li>
    </div>
  );
};

export default Expenses;
