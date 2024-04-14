import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./reducers/quoteSlice";

export interface RootState {
  quote: ReturnType<typeof quoteReducer>;
}

const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});

export default store;
