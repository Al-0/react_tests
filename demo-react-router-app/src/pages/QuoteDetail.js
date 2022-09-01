import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "./../components/comments/Comments";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";
import NoQuotesFound from "./../components/quotes/NoQuotesFound";

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

export const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  return (
    <>
      {!quote && <NoQuotesFound />}
      {quote && (
        <>
          <HighlightedQuote author={quote.author} text={quote.text} />

          <Route path={match.path} exact>
            <div className="centered">
              <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
            </div>
          </Route>
          <Route path={`${match.path}/comments`}>
            <Comments />
          </Route>
        </>
      )}
    </>
  );
};
