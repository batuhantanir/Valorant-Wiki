import { configureStore } from "@reduxjs/toolkit";
//SLİCES
import AgentsSlice from "../Slices/AgentsSlice";
import WeaponsSlice from "../Slices/WeaponsSlice";
import MapsSlice from "../Slices/MapsSlice";

export const store = configureStore({
  reducer: {
    Agents: AgentsSlice,
    Weapons: WeaponsSlice,
    Maps: MapsSlice,
  },
});
