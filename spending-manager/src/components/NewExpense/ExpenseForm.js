import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0.0);
  const [enteredDate, setEnteredDate] = useState(new Date());
  const [addExpenseFlag, setAddExpenseFlag] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    setEnteredTitle("");
    setEnteredAmount(0.0);
    setEnteredDate(new Date());
    setAddExpenseFlag(false);

    props.onSaveExpenseData(expenseData);
  };

  return (
    <div>
      {addExpenseFlag ? (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                onChange={titleChangeHandler}
                value={enteredTitle}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
                value={enteredAmount}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2023-12-31"
                onChange={dateChangeHandler}
                value={enteredDate}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={() => setAddExpenseFlag(false)}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        <button onClick={() => setAddExpenseFlag(true)}>Add new expense</button>
      )}
    </div>
  );
}
