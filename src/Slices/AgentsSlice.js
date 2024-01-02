import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  agents: [],
};

export const getAgents = createAsyncThunk("getAgents", async () => {
  const res = await axios.get(
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
  );
  return res.data.data;
});
export const AgentsSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAgents.fulfilled, (state, { payload }) => {
      state.agents = payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { data } = AgentsSlice.actions;

export default AgentsSlice.reducer;
