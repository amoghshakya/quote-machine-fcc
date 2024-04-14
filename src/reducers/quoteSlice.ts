import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { QuoteResponse } from "../interfaces";
import { QUOTE_API } from "../constants";

interface QuoteState {
  quote: QuoteResponse | null;
  loading: boolean;
  error?: string | null;
}

const initialState: QuoteState = {
  quote: null,
  loading: false,
  error: null,
};

export const fetchQuote = createAsyncThunk<QuoteResponse>(
  "quote/fetchQuote",
  async () => {
    const response = await fetch(QUOTE_API);
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    return await response.json();
  }
);

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.loading = false;
        state.quote = action.payload;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;
