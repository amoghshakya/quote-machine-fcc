import { useSelector } from "react-redux";
import { RootState } from "../store";

function QuoteText() {
  const quote = useSelector((state: RootState) => state.quote.quote);
  return (
    <div id="text">
      <h1>{quote && quote.content}</h1>
    </div>
  );
}

export default QuoteText;
