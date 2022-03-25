import React, {useState} from "react";
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState(2022);

  const saveSelectedYear = (year) =>{
    setSelectedYear(year);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={selectedYear} onSaveSelectedYear={saveSelectedYear} />
      <ExpenseItem
        title={props.expenseList[0].title}
        amount={props.expenseList[0].amount}
        date={props.expenseList[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenseList[1].title}
        amount={props.expenseList[1].amount}
        date={props.expenseList[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenseList[2].title}
        amount={props.expenseList[2].amount}
        date={props.expenseList[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenseList[3].title}
        amount={props.expenseList[3].amount}
        date={props.expenseList[3].date}
      ></ExpenseItem>
    </Card>
  );
}
