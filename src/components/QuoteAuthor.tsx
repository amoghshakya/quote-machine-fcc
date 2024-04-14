import { useSelector } from "react-redux";
import { RootState } from "../store";

function QuoteAuthor() {
  const author = useSelector((state: RootState) => state.quote.quote);
  return (
    <div id="author">
      <p>{author && `-${author.author}`}</p>
    </div>
  );
}

export default QuoteAuthor;
