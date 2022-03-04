import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  animeList: [],
}

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {

  },
});

export default HomePageSlice.reducer;