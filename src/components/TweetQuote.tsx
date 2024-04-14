import { useSelector } from "react-redux";
import { RootState } from "../store";
import { QuoteResponse } from "../interfaces";

function TweetQuote() {
  function generateTwitterShareLink(quote: QuoteResponse) {
    const encodedText = encodeURIComponent(
      quote.content + `\n-${quote.author}`
    );
    return `https://twitter.com/intent/tweet?text=${encodedText}`;
  }

  const quote = useSelector((state: RootState) => state.quote.quote);
  return (
    <>
      {quote && (
        <a
          href={generateTwitterShareLink(quote)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on twitter"
          data-size="large"
          title="Share on twitter"
          id="tweet-quote"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            x="0"
            y="0"
            viewBox="0 0 30 30"
          >
            <path d="M26.37 26l-8.795-12.822.015.012L25.52 4h-2.65l-6.46 7.48L11.28 4H4.33l8.211 11.971-.001-.001L3.88 26h2.65l7.182-8.322L19.42 26h6.95zM10.23 6l12.34 18h-2.1L8.12 6h2.11z"></path>
          </svg>
        </a>
      )}
    </>
  );
}

export default TweetQuote;
