import "./App.css";
import QuoteBox from "./components/QuoteBox";
import store from "./store";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
      <QuoteBox />
    </Provider>
  );
}

export default App;
