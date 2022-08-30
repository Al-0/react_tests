import React from "react";
import { useParams, Route } from "react-router-dom";
import Comments from './../components/comments/Comments'

export const QuoteDetail = () => {
  const params = useParams();

  return (
    <>
      <div>QuoteDetail {params.quoteId}</div>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
      </Route>
    </>
  );
};
