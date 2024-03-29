import { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import Comments from "./../components/comments/Comments";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";
import NoQuotesFound from "./../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";

// const DUMMY_QUOTES = [
//   {
//     id: "q1",
//     author: "AA",
//     text: "Serenity is key.",
//   },
//   {
//     id: "q2",
//     author: "Cuauhtemoc",
//     text: "The song of the lady bird.",
//   },
// ];

export const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error){
    return <p className="centered">{error}</p>
  }

  return (
    <>
      {!loadedQuote.text && <NoQuotesFound />}
      {loadedQuote.text && (
        <>
          <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />

          <Route path={match.path} exact>
            <div className="centered">
              <Link className="btn--flat" to={`${match.url}/comments`}>
                Load Comments
              </Link>
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

export default QuoteDetail;
