import { useDispatch, useSelector } from "react-redux";
import QuoteAuthor from "./QuoteAuthor";
import QuoteText from "./QuoteText";
import Button from "./ui/Button";
import { fetchQuote } from "../reducers/quoteSlice";
import { RootState } from "../store";
import { useEffect } from "react";
import TweetQuote from "./TweetQuote";

function QuoteBox() {
  const quote = useSelector((state: RootState) => state.quote.quote);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!quote) {
      // @ts-ignore
      dispatch(fetchQuote());
    }
  }, [dispatch]);

  const handleFetchQuote = () => {
    // @ts-ignore
    dispatch(fetchQuote());
  };
  return (
    <div id="quote-box">
      <QuoteText />
      <QuoteAuthor />
      <Button id="new-quote" onClick={handleFetchQuote}>
        New quote
      </Button>
      <TweetQuote />
    </div>
  );
}

export default QuoteBox;
