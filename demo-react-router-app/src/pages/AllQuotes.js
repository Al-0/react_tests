import React from "react";
import QuoteList from "./../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "AA",
    text: "Serenity is key.",
  },
  {
    id: "q2",
    author: "Cuauhtemoc",
    text: "The song of the lady bird.",
  },
];

export const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>;
};
