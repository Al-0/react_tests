import React, { useState } from "react";
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState(2021);

  const saveSelectedYear = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenseList.filter(
    (item) => item.date.getFullYear() === Number(selectedYear)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onSaveSelectedYear={saveSelectedYear}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
}
