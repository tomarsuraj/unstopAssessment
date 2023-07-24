import { useState } from "react";
import "./App.css";
import Assessment from "./Pages/Assessment";
import SideDrawer from "./components/SideDrawer";

function App() {
  const [setshowSideDrawer, setSetshowSideDrawer] = useState(false);
  const closeSideDrawer = () => {
    setSetshowSideDrawer(false);
  };
  const openSideDrawer = () => {
    setSetshowSideDrawer(true);
  };
  return (
    <div className="App">
      <div
        className={setshowSideDrawer ? "SideDrawerDisplay" : "SideDrawerNone"}
      >
        <SideDrawer closeSideDrawer={closeSideDrawer} />
      </div>
      <Assessment openSideDrawer={openSideDrawer} />
    </div>
  );
}

export default App;
