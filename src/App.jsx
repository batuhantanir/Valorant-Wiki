import { useDispatch } from "react-redux";
import "./App.css";
//COMPONENTS
//ROUTER
import AppRouter from "./Router/AppRouter";
import { useEffect } from "react";
//SLİCES
import { getAgents } from "./Slices/AgentsSlice";
import { getWeapons } from "./Slices/WeaponsSlice";
import { getMaps } from "./Slices/MapsSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAgents());
    dispatch(getWeapons());
    dispatch(getMaps());
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
