import React from "react";
import QuoteForm from "./../components/quotes/QuoteForm";

export const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  }

  return <QuoteForm onAddQuote={addQuoteHandler}/>;
};
