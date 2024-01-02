import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  weapons: [],
};

export const getWeapons = createAsyncThunk("getWeapons", async () => {
  const res = await axios.get("https://valorant-api.com/v1/weapons");
  return res.data.data;
});
export const WeaponsSlice = createSlice({
  name: "weapons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeapons.fulfilled, (state, { payload }) => {
      state.weapons = payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { data } = WeaponsSlice.actions;

export default WeaponsSlice.reducer;
