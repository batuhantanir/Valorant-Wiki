import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  maps: [],
};
export const getMaps = createAsyncThunk("getMaps", async () => {
  const res = await axios.get("https://valorant-api.com/v1/maps");
  return res.data.data;
});
export const MapsSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMaps.fulfilled, (state, { payload }) => {
      state.maps = payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { data } = MapsSlice.actions;

export default MapsSlice.reducer;
